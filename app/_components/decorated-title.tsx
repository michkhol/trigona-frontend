export default function DecoratedTitle({title }: {title: string}) {
  return (
    <div className="flex flex-row gap-4 items-center justify-center w-full mt-10 mb-6">
        <div className="bg-orange-600 h-px w-1/2"></div>
        <div className="items-center">
          <h1 className="font-serif font-semibold text-3xl text-nowrap">{title}</h1>
        </div>
        <div className="bg-orange-600 h-px w-1/2"></div>
      </div>
  )}