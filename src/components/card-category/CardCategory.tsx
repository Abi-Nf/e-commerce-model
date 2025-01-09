export type CardCategoryProps = {
  label: string,
  color: string,
  imgUrl: string,
};

export const CardCategory = ({ imgUrl, color, label }: CardCategoryProps) => {
  return (
    <div className="bg-gray-200 relative shadow-xl flex items-center justify-center rounded-lg overflow-hidden transition-all sm:w-[16em] sm:h-[8em] group w-[12em] h-[6em] flex-shrink-0">
      <img
        src={imgUrl}
        alt={`${label}'s category`}
        className="group-hover:scale-110 transition-all object-cover w-full h-full"
      />
      <div
        className="absolute w-full h-full flex items-center justify-center backdrop-blur-sm"
        style={{ backgroundColor: color }}
      >
        <span className="text-xl font-bold text-white select-none font-montserrat">
          {label}
        </span>
      </div>
    </div>
  )
}