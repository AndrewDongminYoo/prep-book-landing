"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Minus, Plus } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

// An illustrative card from the v0 design, not output of the app's calculator:
// amounts scale linearly from a 20-piece base, and the batch count is the
// quantity over a 30-piece maximum, rounded up. The baker's percentages are
// the flour-relative ratios the app shows for the same four lines.
const baseYield = 20;
const maxBatch = 30;
const amounts = [1000, 600, 120, 80] as const;
const ratios = ["100%", "60%", "12%", "8%"] as const;

export function RecipePreview({ copy, locale }: { copy: Dictionary["preview"]; locale: Locale }) {
  const [quantity, setQuantity] = useState(60);
  const batches = Math.ceil(quantity / maxBatch);
  const batchText = (batches === 1 ? copy.batchesOne : copy.batchesOther).split("{n}");
  return (
    <div className="recipe-preview">
      <div className="preview-topline">
        <span>
          <span className="tiny-dot" /> {copy.topline}
        </span>
        <span>PREP BOOK</span>
      </div>
      <div className="recipe-heading">
        <h2>{copy.recipe}</h2>
        <span>
          {copy.recipeKind} <ChevronDown size={12} />
        </span>
      </div>
      <p className="recipe-base">
        {copy.base} <span>·</span> {copy.maxBatch}
      </p>
      <div className="quantity-panel">
        <span>{copy.quantityLabel}</span>
        <div>
          <button
            type="button"
            aria-label={copy.decrease}
            disabled={quantity <= 10}
            onClick={() => setQuantity((q) => Math.max(10, q - 10))}
          >
            <Minus size={14} />
          </button>
          <span className="quantity-value" aria-live="polite">
            {quantity}
            <small>{copy.unit}</small>
          </span>
          <button
            type="button"
            aria-label={copy.increase}
            disabled={quantity >= 120}
            onClick={() => setQuantity((q) => Math.min(120, q + 10))}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="batch-info">
        <span>
          {batchText[0]}
          <b>{batches}</b>
          {batchText[1]}
        </span>
        <ArrowRight size={14} />
      </div>
      <table>
        <caption className="sr-only">{copy.tableCaption}</caption>
        <thead>
          <tr>
            {copy.columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {copy.ingredients.map((name, i) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                {((amounts[i] * quantity) / baseYield).toLocaleString(locale)} <span>g</span>
              </td>
              <td>{ratios[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="preview-bottom">
        <Check size={13} />
        <span>{copy.bottom}</span>
        <span className="preview-example">{copy.example}</span>
      </div>
    </div>
  );
}
