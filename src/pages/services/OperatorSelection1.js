import React from 'react';

const OperatorSelection1 = ({
  selectedCategory,
  operators,
  selectedOperator,
  setSelectedOperator,
  accountNumber,
  handleAccountNumberChange,
  inputError,
  fetchBillDetails,
  loading,
  onBack
}) => (
  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">{selectedCategory} Operators</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Operator</label>
        <select
          value={selectedOperator}
          onChange={(e) => setSelectedOperator(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          disabled={loading}
        >
          <option value="">Select an operator</option>
          {operators.map((operator) => (
            <option key={operator.id} value={operator.id}>
              {operator.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {selectedOperator && operators.find(op => op.id === selectedOperator)?.displayname || 'Account Number'}
        </label>
        <input
          type="text"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          placeholder={
            selectedOperator 
              ? operators.find(op => op.id === selectedOperator)?.displayname || 'Enter account number' 
              : 'Enter account number'
          }
          className={`w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            inputError ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={loading}
        />
        {inputError && (
          <p className="mt-1 text-sm text-red-600">{inputError}</p>
        )}
      </div>
    </div>
    
    <div className="flex justify-between mt-4">
      <button
        onClick={onBack}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
      >
        Back
      </button>
      <button
        onClick={fetchBillDetails}
        disabled={!selectedOperator || !accountNumber || !!inputError || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {loading ? 'Fetching...' : 'Fetch Bill Details'}
      </button>
    </div>
  </div>
);

export default OperatorSelection1;