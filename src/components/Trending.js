import React, { useState } from 'react'
import { Trend, ForestActive, ForestInActive, MountainActive, MountainInActive, 
     SeaActive, SeaInActive, WaterfallActive, WaterfallInActive } 
     from './Icon';
import { TrendingBox, TitleBox, TrendIcon, TrendTitle, ButtonBox, FilterIcon, ThemeButton} 
     from '../assets/css/TrendingStyled'
import usePassQuery from '../common/hooks/usePassQuery';

function Trending() {
     const parseQuery = usePassQuery()

     const [data, setData] = useState({ arr: [{name: "Forest", thumbnail_active: ForestActive, thumbnail_inactive: ForestInActive, isActive: true}, 
                         {name: "Mountain", thumbnail_active: MountainActive, thumbnail_inactive: MountainInActive , isActive: false},
                         {name: "Sea", thumbnail_active: SeaActive, thumbnail_inactive: SeaInActive, isActive: false},
                         {name: "Waterfall", thumbnail_active: WaterfallActive, thumbnail_inactive: WaterfallInActive, isActive: false}] })
     const onClick = (index) => {
          let tmp = [...data.arr]
          tmp[index].isActive = !tmp[index].isActive;
          
          const filters = tmp.map((_, index) => index).filter(index => data.arr[index].isActive)
          // console.log('click')
          parseQuery({ params: { filters }, targetUrl: '/' })
          setData({ arr: tmp })

     }
     
     // console.log('filters')
     return (
               <TrendingBox>
                    <TitleBox>
                         <TrendIcon src={Trend}/>
                         <TrendTitle> Trending </TrendTitle>
                    </TitleBox>
                    <ButtonBox>
                         {data.arr.map((i, index) => (
                         <ThemeButton key={index} onClick={() => {onClick(index)}}>
                              {i.isActive ? (
                              <FilterIcon src={i.thumbnail_active} />
                              ) : (
                              <FilterIcon src={i.thumbnail_inactive} />
                              )}
                         </ThemeButton>
                         ))}
                    </ButtonBox>
               </TrendingBox>
     );
}

export default Trending;