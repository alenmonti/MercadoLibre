import React from "react";
import PayMethod from "./PayMethod";

const PayMethods = () => {
    return (
        <div className="w-full overflow-x-scroll scroll">
        <div className="bg-[#ffffff] flex  mx-auto w-max py-5 px-2 gap-2 my-[40px] justify-evenly rounded-md shadow-md min-w-[1200px] items-center">
            <PayMethod img="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" type="Tarjeta de crédito" link="Ver promociones bancarias"/>
            <PayMethod img="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" type="Tarjeta de débito" link="Ver más"/>
            <PayMethod img="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" type="Cuotas sin tarjeta" link="Conocé Mercado Crédito"/>
            <PayMethod img="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" type="Efectivo" link="Ver más"/>
            <div className="h-full w-[1px] border-gray-200 border-l-[1px] mx-3"></div>
            <PayMethod img="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" type="" link="" center={true}/>
        </div>
        </div>
    );
};

export default PayMethods;