import { useNavigate } from 'react-router-dom';
import {CategoryContainer} from './category-item.style';
import { useContext } from 'react';

import { WebsiteThemeContext } from '../context/theme-color.context.jsx';


const CategoryItem = ({ title, imageUrl}) => {
  const {theme} = useContext(WebsiteThemeContext);
  const navigate = useNavigate();
  const handelClick = (navigateTo) => {
    navigate(`shop/${navigateTo}`)
  }
  return (
      <CategoryContainer>
      <div className='background-image' style={{
          'backgroundImage': `url(${imageUrl})`
        }} onClick={() => handelClick(title)}>
      </div>
      <div className="category-body-container" onClick={() => handelClick(title)} style={theme === 'dark' ? {'backgroundColor': 'rgb(0, 0, 0)'}: {'backgroundColor': 'rgb(255, 255, 255)'}}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </CategoryContainer>
  )
}

export default CategoryItem;