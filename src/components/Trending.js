import React, { Component, useState } from 'react'
import { Trend, ForestActive, ForestInActive, MountainActive, MountainInActive, 
     SeaActive, SeaInActive, WaterfallActive, WaterfallInActive } 
     from './Icon';
import { TrendingBox, TitleBox, TrendIcon, TrendTitle, ButtonBox, FilterIcon, ThemeButton} 
     from '../assets/css/TrendingStyled'

function Trending() {
     const [data, setData] = useState({ arr: [{name: "Sea", thumbnail_active: SeaActive, thumbnail_inactive: SeaInActive, isActive: true}, 
                         {name: "Mountain", thumbnail_active: MountainActive, thumbnail_inactive: MountainInActive , isActive: false}, 
                         {name: "Forest", thumbnail_active: ForestActive, thumbnail_inactive: ForestInActive, isActive: false},
                         {name: "Waterfall", thumbnail_active: WaterfallActive, thumbnail_inactive: WaterfallInActive, isActive: false}] })
     const onClick = (index) => {
          let tmp = data.arr
          const activate = []
          for (let index = 0; index < 4; index++) {
              activate.push(tmp[index].isActive) }
          tmp[index].isActive = !tmp[index].isActive;
          setData({arr: tmp})
     }

     return (
          <TrendingBox>
               <TitleBox>
                    <TrendIcon src={Trend}/>
                    <TrendTitle> Trending </TrendTitle>
               </TitleBox>
               <ButtonBox>
                    {data.arr.map((i, index) => (
                    <ThemeButton key={index} onClick={() => onClick(index)}>
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