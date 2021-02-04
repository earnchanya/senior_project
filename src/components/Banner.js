import ForestBack from '../assets/photo/forest.jpg'
import { BannerBox, Background, TextBox, Header, Content, SearchBox, SearchIcon, CameraIcon } from '../assets/css/BannerStyled'
import { Search, Camera } from './Icon'

const Banner = () => {
     return (
          <BannerBox>
               <Background src={ForestBack}/>
               <TextBox>
                    <Header>Explore</Header>
                    <Content>The beautiful scenes from Blue Planet Pantip</Content>
                    <SearchBox>
                         <SearchIcon src={Search}/>
                         {/* Search
                         <CameraIcon src={Camera}/> */}
                    </SearchBox>
               </TextBox>
          </BannerBox>
     );
}
export default Banner;