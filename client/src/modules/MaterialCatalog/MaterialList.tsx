import { IMaterial } from '../../../../shared/types';
import ColorPreview from '../../components/ColorPreview';
import { Content, Unit } from '../../components/Typography';

interface MaterialListProps {
  materialList: IMaterial[];
  selectedId?: number;
  setMaterialData: (item: IMaterial) => void;
}

const MaterialList = ({
  materialList,
  selectedId,
  setMaterialData
}: MaterialListProps) => {
  if (materialList.length === 0)
    return (
      <div
        className="materialList"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Content
          text="No Materials"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        />
      </div>
    );

  return (
    <ul className="materialList">
      {materialList.map((material: IMaterial) => (
        <li
          className="materialListItem"
          onClick={() => setMaterialData(material)}
          style={{
            backgroundColor:
              material.id === selectedId ? '#34495e' : 'rgba(45, 52, 54, 1)'
          }}
          key={material.id}
        >
          <ColorPreview color={material.color} style={{ margin: '0 10px' }} />

          <div>
            {material.name ? (
              <Content text={material.name} />
            ) : (
              <Content text="Material Name" />
            )}

            <div className="materialVolumeContainer">
              <Content
                text={material.volume}
                style={{
                  display: 'inline',
                  margin: '0 2px',
                  fontSize: '0.9rem'
                }}
              />
              <Unit
                symbol="m"
                number={3}
                symbolStyle={{ fontSize: '0.9rem' }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MaterialList;
