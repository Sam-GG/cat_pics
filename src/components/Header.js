import Button from './Button';
export const Header = ({newCat}) => {
  return (
      <header>
          <Button text="Give Me A New Cat" color="rgb(152, 132, 175)" onClick={newCat}/>
      </header>
  )
};

export default Header;