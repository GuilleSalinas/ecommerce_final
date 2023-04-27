
const CardComponent = () => {
  return (
    <>
    
    <section className="small-container cart-page">
    <table>
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Sub total</th>
        </tr>

        <tr>
            <td>
                <div className="cart-info">
                    <img src="/public/img/buy-1.png" />
                    <div>
                        <p>Traba puerta</p>
                        <small>Precio: $1500</small>
                        <br/>
                        <a href="">Cancelar</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="1"/></td>
                <td>$1500</td>
        </tr>
        <tr>
            <td>
                <div className="cart-info">
                    <img src="/public/img/buy-2.png"/>
                    <div>
                        <p>Traba puerta</p>
                        <small>Precio: $2500</small>
                        <br/>
                        <a href="">Cancelar</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="1"/></td>
                <td>$2500</td>
        </tr>
    </table>
    <div className="total-price">
        <table>
            <tr>
                <td>Subtotal</td>
                <td>$4000</td>
            </tr>
            <tr>
                <td>IVA</td>
                <td>$0</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$4000</td>
            </tr>
        </table>
    </div>
    </section>
    
    </>
    
  )
}

export default CardComponent