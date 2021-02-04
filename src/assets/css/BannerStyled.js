import styled from 'styled-components'

const BannerBox = styled.div`
     display: flex;
     width: 100vw;
     height: 75vh;
     justify-content: center;
`

const Background = styled.img`
     width: 100vw;
     height: 75vh;
     position: absolute;
     opacity: 0.85;
     ${'' /* margin-top: 100px; */}
`

const TextBox = styled.div`
     align-self: center;
     position: absolute;
     margin-left: 30%;
     width: 100vw;
     ${'' /* background-color: yellow; */}
`

const SearchBox = styled.div`
     ${'' /* display: flex;
     flex-direction: row;
     position: absolute;*/}
     heigth: 40px; 
     width: 70vw;
     height: 40px;
     border-radius: 10px;
     display: flex;
     align-items: center;
     ${'' /* justify-content: flex-end; */}
     background-color: #FCFCFC;
`

const SearchIcon = styled.img`
     heigth: 20px; 
     width: 20px;
     margin-left: 8px;
`

const CameraIcon = styled.img`
     heigth: 20px; 
     width: 20px;
     margin-left: 8px;
`

const Header = styled.h2`
     font-size: 28px;
     color: white;
     margin-bottom: 0px
`

const Content = styled.p`
     font-size: 16px;
     color: white;
     margin-top: 8px  
`

export {BannerBox, Background, TextBox, SearchBox, Header, Content, SearchIcon, CameraIcon};