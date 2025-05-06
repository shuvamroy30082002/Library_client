// client/components/ConfirmationModal.js
'use client';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Confirm Action</h2>
        <p className="text-sm text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;