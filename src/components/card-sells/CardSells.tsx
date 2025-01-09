export type CardSellsProps = {
  imgUrl: string;
  price: number;
  label: string;
}
export const CardSells = ({ imgUrl, label, price }: CardSellsProps) => {
  return (
    <div className="group shadow-lg flex flex-col flex-shrink-0">
      <div className="h-[15em] w-[12em] sm:w-[25em] sm:h-[16em] flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={imgUrl}
          alt={`${label}'s sell`}
          className="group-hover:scale-110 transition-all w-full object-cover"
        />
      </div>
      <span className="font-montserrat font-bold text-gray-800 text-lg">
        { `$${price.toLocaleString('en-US')}` }
      </span>
      <span className="font-quicksand font-semibold text-gray-600">
        { label }
      </span>
    </div>
  )
}