// src/components/Card/AssetCard.jsx
export default function AssetCard({ title, description, children }) {
  return (
    <div className="bg-white shadow-md rounded-[10px] w-[380px] overflow-hidden">
      {/* Title */}
      <div className="bg-black text-white px-3 py-2">
        <h3 className="font-sans text-[14px] font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-[12px] text-[#6C757D] px-3 py-2 border-b">
        {description}
      </p>

      {/* Body */}
      <div className="p-3">{children}</div>
    </div>
  );
}
