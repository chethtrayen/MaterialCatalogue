import { useState } from 'react';
import Button from '../../components/Button';
import { IMaterial } from '../../../../shared/types';
import api from '../../utils/api';

interface MaterialCatalogActionsProps {
  setMaterialData: any;
  setMaterialList: any;
  initialFormData: IMaterial;
  materialData: IMaterial;
  setCurrentId: (id: number) => void;
}
const MaterialCatalogActions = ({
  initialFormData,
  setMaterialData,
  setMaterialList,
  materialData,
  setCurrentId
}: MaterialCatalogActionsProps) => {
  // Temp Id to store material on the client
  const [tempId, setTempId] = useState(-1);

  const addNewMaterial = () => {
    setMaterialData({ ...initialFormData, id: tempId });
    setMaterialList((ml: IMaterial[]) =>
      ml.concat({ ...initialFormData, id: tempId })
    );
    setCurrentId(tempId);
    setTempId((id) => id - 1);
  };

  const deleteMaterial = async () => {
    const {
      data: { success }
    } = await api.delete(`/material/${materialData.id}`);

    if (success) {
      setMaterialData({ ...initialFormData });
      setMaterialList((ml: IMaterial[]) =>
        ml.filter((material) => material.id !== materialData.id)
      );
    }
  };

  return (
    <div className="materialCatalogActions">
      <Button
        text="Add"
        onClick={addNewMaterial}
        style={{ backgroundColor: '#3498db' }}
      />
      <Button
        text="Delete"
        onClick={deleteMaterial}
        style={{ backgroundColor: '#e74c3c' }}
      />
    </div>
  );
};

export default MaterialCatalogActions;
