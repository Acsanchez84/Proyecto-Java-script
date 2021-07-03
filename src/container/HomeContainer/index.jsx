import { NavbarComponent} from '../../components/NavbarComponent';


export const HomeContainer =() => {

    const CARRITO = [];
    return(

<div>
       <NavbarComponent cart={CARRITO}/>
</div>
    );
}