import React from 'react'
import Button1 from '../button1'
import Button2 from '../button2'
import Footer from '../footer'
import Details from '../details'
import Categories from '../categories'
import Simillarpg from '../simillarPg'
import Header from '../header'
import Bgimg from '../bgImg'
import Contact from '../contact'
import Description from '../description'
import bn from '../../utilities/bemnames';
const bem = bn.create('mainpage');

const index=  () => (
<div >
     <div className={bem.e("main_header")}>
          <Header/>
     </div>
     <div className={bem.e("main_container")} >
           <div className={bem.e("column_left")}>
              <h2>availabilities</h2>
                <div className={bem.e("main_bgimg")}>
                    <Bgimg/>
                <div>
                    <Button1/>
                </div>
                <div>
                    <Button2/>
                </div>
                </div>
                <div>
                   <Details/>  
                </div>
           </div>
           <div className={bem.e("column_center")}>
                 <div className ={bem.e("column_cen_categories")}>
                     <h2>FACILITIES</h2>
                        <h3>furnishing</h3>
                        <div>
                            <Categories features = {[{label:'tv'},{ label:'ac'},{label:'fridge'}]} />
                        </div>
                        <div>
                            <Categories/>
                        </div>
                        <div className={bem.e("categories_bottom")}>
                            <Categories/> 
                        </div>
                        <h3>security</h3>
                        <div className={bem.e("categories_btm")}>
                           <Categories/>  
                        </div>
                       <h3>Features</h3>
                       <div className={bem.e("categories_botm")}>
                           <Categories/> 
                       </div>
                 </div>
           </div>
           <div className ={bem.e("column_right")}>
                  <h2>contact</h2>
                <div className={bem.e("contact")}>
                     <Contact/>  
                </div>      
                <div className={bem.e("description")}>
                   <h2>DESCRIPTION</h2>
                     <Description/>          
                </div> 
                <div className= {bem.e("col_right_pgs")}>
                     <h2>Simillar Pg's</h2>
                     <div className={bem.e("col_right_pg")}><Simillarpg/></div>
                     <div className={bem.e("col_right_pg")}><Simillarpg/></div>  
                     <div className={bem.e("col_right_pg")}><Simillarpg/></div>             
                </div>
           </div>
     </div>
      <Footer/>
</div>
);
export default index;