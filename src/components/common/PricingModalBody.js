import PricingPlans from "./PricingPlans";

function PricingModalBody({ closeModal, extraObject }) {
  const { isLoggedIn, message } = extraObject;

  return (
    <div className="bg-slate-50">
      <p className="text-center text-primary text-2xl mt-4">{message}</p>
      <h2 className="text-3xl mt-4  text-center font-bold">
        Flexible Pricing Plans
      </h2>
      <PricingPlans />
    </div>
  );
}

export default PricingModalBody;
