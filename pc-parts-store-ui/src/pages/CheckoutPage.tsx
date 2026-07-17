import { Link } from "react-router-dom";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummary from "../components/Checkout/OrderSummary";
import EmptyState from "../components/EmptyState";
import {useCart} from "../context/CartContext"

function CheckoutPage() {
    const { items } = useCart();
    if (items.length === 0) {
        return (
            <EmptyState
                title="Your cart is empty"
                message="Add some products before proceeding to checkout."
                action={
                    <Link to="/products">Browse Products</Link>
                }
            />
        );
    }
    return (
        <div>

            <h1 className="mb-8 text-4xl font-bold">
                Checkout
            </h1>

            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

                <CheckoutForm />

                <OrderSummary />

            </div>

        </div>
    );
}

export default CheckoutPage;