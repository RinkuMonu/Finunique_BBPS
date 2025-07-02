import { useState } from "react";

const OperatorSelection = ({
 operators,
  selectedOperator,
  setSelectedOperator,
  caNumber,
  setCaNumber,
  onNext,
}) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [error, setError] = useState("");

  const categories = ["all", ...new Set(operators.map((op) => op.category))];

  const filteredOperators =
    categoryFilter === "all"
      ? operators
      : operators.filter((op) => op.category === categoryFilter);


       const handleSubmit = () => {
    setError("");

    if (!selectedOperator) {
      setError("Please select an operator.");
      return;
    }

    if (!caNumber) {
      setError("Please enter the account number.");
      return;
    }

    if (selectedOperator.regex) {
      const pattern = new RegExp(selectedOperator.regex);
      if (!pattern.test(caNumber)) {
        setError("Account number format is invalid.");
        return;
      }
    }

    onNext(); // all good
  };
  return (
    <div className="w-full space-y-6">
      {/* Category Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Filter by Category
        </label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Operator Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Select Operator
        </label>
        <select
          value={selectedOperator?.id || ""}
          onChange={(e) => {
            const selected = filteredOperators.find(
              (op) => op.id.toString() === e.target.value
            );
            setSelectedOperator(selected);
          }}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select Operator --</option>
          {filteredOperators.map((operator) => (
            <option key={operator.id} value={operator.id}>
              {operator.name}
            </option>
          ))}
        </select>
      </div>

      {/* CA Number Input */}
      {selectedOperator && (
        <div>
          <label
            htmlFor="caNumber"
            className="block text-sm font-medium text-gray-800 mb-1"
          >
            {selectedOperator.displayname || "Account Number"}
          </label>
          <input
            type="text"
            id="caNumber"
            value={caNumber}
            onChange={(e) => setCaNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`Enter ${selectedOperator.displayname || "account number"}`}
          />
          {selectedOperator.regex && (
            <p className="mt-1 text-xs text-gray-500">
              Format: {selectedOperator.regex.replace(/[\\^$]/g, "")}
            </p>
          )}
        </div>
      )}
      

      {/* Action Button */}
      <button
        onClick={handleSubmit}

        disabled={!selectedOperator || !caNumber}
  className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 ${
    !selectedOperator || !caNumber
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
        Fetch Bill
      </button>
    </div>
  );
};

export default OperatorSelection;