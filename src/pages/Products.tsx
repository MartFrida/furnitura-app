import Container from "../components/Container"
import PriceTableModal from "../components/ServiceCard"
// import ServiceCard from "../components/ServiceCard"

const Products: React.FC = () => {

  return (
    <div className="mt-20">
      <Container>
        <h1 className="text-amber-400 tracking-widest text-5xl md:text-8xl font-bold leading-relaxed text-center">ВИДИ ПОСЛУГ</h1>
      </Container>
      <Container>

        <div className="flex flex-row flex-wrap gap-4 rounded-lg my-4">
          <PriceTableModal />
          {/* <ServiceCard image='/images/mаktek.jpg' title='Порізка' description={{
            workList: ["hjkg"], // workList должен быть массивом строк
            unit: "string",
            price: "", // Если цена пустая, лучше передавать 0 или строку "N/A"
            currency: "string"
          }} />
          <ServiceCard
            image='/images/freser.jpg'
            title='Фрезерування'
            description={{
              workList: ["Крайкування прямолінійне - ПВХ /Rehau", "Крайкування прямолінійне - ПВХ /глянець"],
              unit: "м.п",
              price: "23",
              currency: "грн"
            }} />
          <ServiceCard image='/images/board.jpg' title='Крайкування' description={{
            workList: ["hjkg"],
            unit: "string",
            price: "",
            currency: "string"
          }} />
          <ServiceCard image='/images/stag.jpg' title='Стяжка' description={{
            workList: ["hjkg"],
            unit: "string",
            price: "",
            currency: "string"
          }} />
          <ServiceCard image='/images/mаktek.jpg' title='Додаткові послуги' description={{
            workList: ["hjkg"],
            unit: "string",
            price: "",
            currency: "string"
          }} /> */}
        </div>
      </Container>


    </div >
  )
}

export default Products