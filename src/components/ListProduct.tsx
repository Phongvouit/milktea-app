import ItemProduct from "./ItemProduct"

const ListProduct = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 mb-10 grid grid-cols-2 md:grid-cols-4">
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
        <ItemProduct/>
    </div>
  )
}

export default ListProduct