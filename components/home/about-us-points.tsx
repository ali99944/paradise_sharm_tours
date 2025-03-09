export default function AboutUsePoints() {
    const items = [
        { title: "قيمنا", description: "نلتزم بالإبداع والجودة، ونسعى لتقديم حلول مخصصة وفعّالة تعكس الشفافية والثقة، مع التركيز على العمل الجماعي والتطوير المستمر لضمان تميز علامتك ." },
        { title: "مهمتنا", description: "نقدم حلولًا إبداعية واستراتيجية لتسويق فعال يعزز وجود علامتك التجارية ويحقق أهدافك بتصميمات جذابة وحملات مخصصة." },
        { title: "رؤيتنا", description: "نحن نطمح أن نكون الخيار الأول في مجال الدعايا والاعلان ، من خلال تقديم حلول مبتكرة وعالية الجودة تتجاوز توقعات عملائنا." },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white p-4">
            {items.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg shadow h-50 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-center">{item.title}</h2>
                        <p className="mt-2 text-center">{item.description}</p>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-orange-500 text-black rounded w-full font-bold">
                        تواصل معنا
                    </button>
                </div>
            ))}
        </div>
    );
}
