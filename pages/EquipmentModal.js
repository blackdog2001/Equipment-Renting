import { Modal } from 'antd';

const EquipmentModal = ({ visible, equipment, onClose }) => {
  return (
    <Modal
      title={equipment ? equipment.EquipName : ''}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {equipment && (
        <div>
          <p>ชื่ออุปกรณ์: {equipment.EquipName}</p>
          <p>จำนวน: {equipment.Amount}</p>
          {/* เพิ่มข้อมูลอื่นๆของอุปกรณ์ที่คุณต้องการแสดง */}
        </div>
      )}
    </Modal>
  );
};

export default EquipmentModal;
