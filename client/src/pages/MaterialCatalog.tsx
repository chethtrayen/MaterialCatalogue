import { useCallback, useEffect, useMemo, useState } from 'react';
import { Content, Header } from '../components/Typography';
import MaterialList from '../modules/MaterialCatalog/MaterialList';
import '../styles/materialCatalog.css';
import { IMaterial } from '../../../shared/types';
import {
  colorValidation,
  dateValidation,
  numberValidation,
  stringValidation
} from '../utils/validate';
import MaterialForm from '../modules/MaterialCatalog/MaterialForm';
import MaterialCatalogActions from '../modules/MaterialCatalog/MaterialCatalogActions';
import debounce from 'lodash.debounce';
import api from '../utils/api';

const initialFormData: IMaterial = {
  color: '',
  cost: 0,
  deliveryDate: '',
  name: '',
  volume: 0
};

const MaterialCatalog = () => {
  const [materialData, setMaterialData] = useState<IMaterial>(initialFormData);
  const [materialList, setMaterialList] = useState<IMaterial[]>([]);
  const [currentId, setCurrentId] = useState(0);

  const getMaterials = useCallback(async () => {
    const {
      data: { materials }
    } = await api.get('/material');
    setMaterialList(materials);
  }, []);

  useEffect(() => {
    getMaterials();
  }, [getMaterials]);

  const saveMatieral = async () => {
    const {
      data: { success, newId }
    } = await api.post('/material', { ...materialData });

    if (success) {
      // Insert new data into form and list
      setMaterialData((md: IMaterial) => ({ ...md, id: newId }));
      setMaterialList((ml: IMaterial[]) =>
        ml.map((item: IMaterial) =>
          item.id === materialData.id ? { ...materialData, id: newId } : item
        )
      );
    }
  };

  const updateMaterial = async () => {
    const {
      data: { success }
    } = await api.put('/material', { ...materialData });
    if (success) {
      // Update the material in the list
      setMaterialList((ml: IMaterial[]) =>
        ml.map((item: IMaterial) =>
          item.id === materialData.id ? materialData : item
        )
      );
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const saveData = async () => {
    if (!materialData.id) return;

    // Prevent create/update on material selection change
    if (currentId !== materialData.id) {
      setCurrentId(materialData.id);
      return;
    }

    // Save material when using a temp id
    if (materialData.id < 0) {
      await saveMatieral();
    } else {
      await updateMaterial();
    }
  };

  useEffect(() => {
    const { color, name, cost, deliveryDate, volume } = materialData;

    // Validate data before triggering debounce
    if (
      !colorValidation(color) ||
      !stringValidation(name) ||
      !numberValidation(volume) ||
      !numberValidation(cost) ||
      !dateValidation(deliveryDate)
    )
      return;

    watchForm();

    return () => {
      watchForm.cancel();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materialData]);

  // Debounce to track form changes
  const watchForm = useMemo(() => debounce(saveData, 500), [saveData]);

  return (
    <div className="materialCatalogContainer">
      <div className="materialCatalogHeader">
        <Header text="Materials" />
        <MaterialCatalogActions
          setMaterialList={setMaterialList}
          setMaterialData={setMaterialData}
          initialFormData={initialFormData}
          materialData={materialData}
          setCurrentId={setCurrentId}
        />
      </div>

      <div className="materialCatalogContent">
        <MaterialList
          selectedId={materialData?.id}
          materialList={materialList}
          setMaterialData={setMaterialData}
        />
        <MaterialForm
          materialData={materialData}
          setMaterialData={setMaterialData}
        />
      </div>

      <div className="materialCatalogFooter">
        <Content text="Total Cost:" />
        <Content
          text={`$${(materialData.volume * materialData.cost).toFixed(2)}`}
        />
      </div>
    </div>
  );
};

export default MaterialCatalog;
