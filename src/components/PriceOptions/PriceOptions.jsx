import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
        const PriceOptions = [
          {
            "id": 1,
            "Name": "Basic Access",
            "features": [
              "Access to gym equipment during regular hours",
              "Locker room access",
              "Free Wi-Fi",
              "Monthly fitness newsletter",
              "Access to basic workout plans"
            ],
            "price": 25.00,
          },
          {
            "id": 2,
            "Name": "Standard Plus",
            "features": [
              "24/7 gym access",
              "Locker room and sauna access",
              "Free group fitness classes (up to 5 per month)",
              "Access to all city locations",
              "2 guest passes per month",
              "Discount on personal training sessions"
            ],
            "price": 45.00,
          },
          {
            "id": 3,
            "Name": "Premium Package",
            "features": [
              "Unlimited 24/7 gym access",
              "Locker room, sauna, and pool access",
              "Unlimited group fitness classes",
              "Access to all locations nationwide",
              "4 personal training sessions per month",
              "Priority registration for workshops and events",
              "Monthly nutrition workshop"
            ],
            "price": 75.00,
          },
          {
            "id": 4,
            "Name": "Family Plan",
            "features": [
              "24/7 gym access for up to 4 family members",
              "Locker room, sauna, and pool access",
              "Unlimited group fitness classes for all family members",
              "Access to all locations nationwide",
              "Free child care services during workout hours",
              "Discount on family-oriented fitness classes and events"
            ],
            "price": 99.00,
          },
        ];
     
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices</h2>
           <div className="grid md:grid-cols-3 gap-6"> 
           {
              PriceOptions.map(option => <PriceOption key={option.id} option = {option}></PriceOption>)
            }
           </div>
        </div>

    );
  };

export default PriceOptions;