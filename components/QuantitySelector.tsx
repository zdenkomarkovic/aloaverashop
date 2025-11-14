"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    } else if (e.target.value === "") {
      onQuantityChange(min);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-700">Količina:</span>
      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={handleDecrease}
          disabled={quantity <= min}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          type="button"
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="w-16 text-center font-semibold py-2 border-x-2 border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleIncrease}
          disabled={quantity >= max}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          type="button"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
