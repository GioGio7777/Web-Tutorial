import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer,ServicesH1,ServicesCard,ServicesH2,ServicesIcon,ServicesWrapper,ServicesP} from './ServicesElements';
function Services() {
  return (
     <ServicesContainer id = "services">
         <ServicesH1> Our Services</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
                 <ServicesIcon src= {Icon1}/>
                 <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        
                    </ServicesP>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcon src= {Icon2}/>
                 <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </ServicesP>
             </ServicesCard>


             <ServicesCard>
                 <ServicesIcon src= {Icon3}/>
                 <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </ServicesP>
             </ServicesCard>


         </ServicesWrapper>
     </ServicesContainer>
  )
}

export default Services