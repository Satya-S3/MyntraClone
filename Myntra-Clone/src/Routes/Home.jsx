import HomeItem from "../Components/HomeItem";
import {useSelector} from "react-redux";


function Home() {
      const items=useSelector(store=>store.items);

      const SearchValue = useSelector(store => store.search);
      const finalItems=items.filter(item=>{
            const itemIndex=item.company.toLowerCase().includes(SearchValue.toLowerCase());
            return itemIndex;
      })

      return <>
            <main>
                  <div className="items-container">
                        <div className="d-flex justify-content-between">
                              {SearchValue==='' && <img src="../images/myntra.jpg" width={700}  alt="" />}
                              {SearchValue==='' && <img src="../images/kiara.jpg" width={400}  alt="" />}
                        </div>
                        {SearchValue==='' ? items.map(item=><HomeItem key={item.id} item={item}/>) : finalItems.map(item=><HomeItem key={item.id} item={item} />)}
                  </div>
            </main>
      </>
}
export default Home;