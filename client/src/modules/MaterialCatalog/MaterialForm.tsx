import { IMaterial } from '../../../../shared/types';
import ColorPreview from '../../components/ColorPreview';
import Input from '../../components/Input';
import { Label, Unit } from '../../components/Typography';

interface MaterialFormProps {
  materialData: IMaterial;
  setMaterialData: any;
}

const MaterialForm = ({ materialData, setMaterialData }: MaterialFormProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="materialForm">
      <div className="materialInputContainer">
        <Label text="Name" />
        <Input
          onChange={(value: string) =>
            setMaterialData(
              (md: IMaterial) => ({ ...md, name: value } as IMaterial)
            )
          }
          value={materialData.name}
        />
      </div>
      <div className="materialInputContainer">
        <Label text="Color" />
        <div className="materialColorInputContainer">
          <ColorPreview
            color={materialData.color}
            style={{ width: '50px', height: '40px' }}
          />
          <Input
            onChange={(value: any) =>
              setMaterialData((md: IMaterial) => ({ ...md, color: value }))
            }
            value={materialData.color}
          />
        </div>
      </div>
      <div className="materialInputContainer">
        <div style={{ display: 'flex', gap: '2px', fontWeight: 'bold' }}>
          <Label text="Volume" />
          (<Unit symbol="m" number={3} />)
        </div>
        <Input
          onChange={(value: any) =>
            setMaterialData((md: IMaterial) => ({ ...md, volume: value }))
          }
          value={materialData.volume}
          type="number"
        />
      </div>
      <div className="materialInputContainer">
        <div style={{ display: 'flex', gap: '2px', fontWeight: 'bold' }}>
          <Label text="Cost" />
          (USD per
          <Unit symbol="m" number={3} />)
        </div>
        <Input
          onChange={(value: any) =>
            setMaterialData((md: IMaterial) => ({ ...md, cost: value }))
          }
          value={materialData.cost}
          type="number"
        />
      </div>
      <div className="materialInputContainer">
        <Label text="Delivery Date" />
        <Input
          onChange={(value: any) =>
            setMaterialData((md: IMaterial) => ({ ...md, deliveryDate: value }))
          }
          value={materialData.deliveryDate}
          type="date"
          placeholder="MM/DD/YYYY"
        />
      </div>
    </div>
  );
};

export default MaterialForm;
