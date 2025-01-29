import { FaStar } from 'react-icons/fa';
import TitleBg from '../../Components/ui/TitleBg';
import productImg1 from '../../assets/bubbaKush.png';
import productImg2 from '../../assets/Frame 1000011859.png';
import productImg3 from '../../assets/Frame 1707481910.png';
import productImg4 from '../../assets/Frame 1707481911.png';
import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { ConfigProvider, Tabs } from 'antd';
import ProductCard from '../../Components/ui/ProductCard';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const productData = {
        title: 'Bubba Kush THCA Flower',
        reviews: [
                {
                        name: 'John Doe',
                        rating: 5,
                        comment: 'This product is amazing. I love it!',
                },
                {
                        name: 'Jane Smith',
                        rating: 4,
                        comment: "I really dislike this product. It's not what I expected.",
                },
        ],
        price: {
                oneUnit: 750,
                twoUnit: 1100,
                threeUnit: 2100,
                fourUnit: 3650,
                fiveUnit: 4950,
        },
        shortDescription:
                'Relax with Bubba Kush THCA Flower, an indica known for its rich coffee and chocolate flavors. Perfect for winding down, it offers deep relaxation with a 22.7% THCA level. Available in half and full pounds, it’s ideal for chill evenings This product contains less than 0.3% Delta-9 THC and complies with the 2018 U.S. Farm Bill, making it legal in most states (except HI, ID, MN, OR, RI, UT, and VT).',
        availability: 'available',
        tags: 'THCA Flower',
        category: 'THCA Flower',
};

const relatedProductData = [
        {
                id: 1,
                image: productImg1,
                label: 'WHOLESALE',
                title: 'Bubba Kush',
                description: 'THCA Flower Pounds Indica | 22.70% THCa | HP, LB',
                price: '$750 - $1000',
        },
        {
                id: 2,
                image: productImg1,
                label: 'PREMIUM',
                title: 'Pineapple Express',
                description: 'Sativa | 18.90% THCa | HP, LB',
                price: '$650 - $900',
        },
        {
                id: 3,
                image: productImg1,
                label: 'WHOLESALE',
                title: 'OG Kush',
                description: 'Hybrid | 20.50% THCa | HP, LB',
                price: '$800 - $1100',
        },
        {
                id: 4,
                image: productImg1,
                label: 'ORGANIC',
                title: 'Gelato',
                description: 'Hybrid | 21.20% THCa | HP, LB',
                price: '$700 - $950',
        },
        {
                id: 5,
                image: productImg1,
                label: 'ORGANIC',
                title: 'Gelato',
                description: 'Hybrid | 21.20% THCa | HP, LB',
                price: '$700 - $950',
        },
        {
                id: 6,
                image: productImg1,
                label: 'ORGANIC',
                title: 'Gelato',
                description: 'Hybrid | 21.20% THCa | HP, LB',
                price: '$700 - $950',
        },
];

const Product = () => {
        const [mainImage, setMainImage] = useState(productImg1);
        const [selectedWeight, setSelectedWeight] = useState('oneUnit');
        const [quantity, setQuantity] = useState(1);

        // Function to calculate total price
        const totalPrice = productData.price[selectedWeight] * quantity;

        const onChange = (key) => {
                console.log(key);
        };

        const description = (
                <>
                        <div>
                                <h1 className="text-lg font-bold">Deep Relaxing Indica</h1>
                                <p>
                                        Bubba Kush is a classic indica, a cross between OG Kush and another mystery
                                        indica, with origins tracing back to the legendary cannabis scene of New
                                        Orleans. This strain delivers powerful relaxation, making it the ideal choice
                                        for a chill night.
                                </p>
                        </div>
                        <div className="my-5">
                                <h1 className="text-lg font-bold">Rich Flavor Profile</h1>
                                <p>
                                        Experience the rich aromas of coffee and chocolate that make Bubba Kush a
                                        standout. With earthy tones and a touch of sweetness, it’s like enjoying your
                                        favorite coffee shop while you relax. The flavor enhances its calming effects
                                        for the ultimate chill experience. Visually Impressive BudsBubba Kush features
                                        dense, bulky buds that are dark green with occasional purple hues. Coated in a
                                        glistening layer of trichomes, it’s as pleasing to the eyes as it is to the
                                        senses.
                                </p>
                        </div>
                        <div>
                                <h1 className="text-lg font-bold">Perfect for Evening Use</h1>
                                <p>
                                        Bubba Kush THCA Flower is your go-to for evening relaxation. Whether you choose
                                        a half pound or a full pound, you’ll be set for an unforgettable relaxation
                                        experience. Ready to kick back? This legendary indica has you covered. 4o mini
                                </p>
                        </div>
                </>
        );

        const items = [
                {
                        key: '1',
                        label: <p className="md:text-xl">Description</p>,
                        children: description,
                },
                {
                        key: '2',
                        label: <p className="md:text-xl">Additional Information</p>,
                        children: 'Content of Tab Pane 2',
                },
                {
                        key: '3',
                        label: <p className="md:text-xl">Reviews</p>,
                        children: 'Content of Tab Pane 3',
                },
        ];

        return (
                <>
                        <TitleBg title="Bubba Kush THCA Flower" />
                        <div className="p-8 mx-auto max-w-7xl md:p-28 font-fontTwo">
                                <div className="gap-5 justify-center items-center md:flex">
                                        <div className="md:w-[45%] flex flex-col items-center">
                                                {/* Main Image */}
                                                <div className="mb-5 w-full">
                                                        <img
                                                                className="md:w-[600px] w-[350px] h-[300px] md:h-[440px]"
                                                                src={mainImage}
                                                                alt="Main Image"
                                                                // preview={false}
                                                        />
                                                </div>

                                                {/* Thumbnail Images */}
                                                <div className="grid grid-cols-4 gap-2">
                                                        <img
                                                                src={productImg1}
                                                                alt="Thumbnail 1"
                                                                className="w-20 h-20 transition-transform transform cursor-pointer md:h-28 md:w-28 hover:scale-110"
                                                                onClick={() => setMainImage(productImg1)}
                                                        />
                                                        <img
                                                                src={productImg2}
                                                                alt="Thumbnail 2"
                                                                className="w-20 h-20 transition-transform transform cursor-pointer md:h-28 md:w-28 hover:scale-110"
                                                                onClick={() => setMainImage(productImg2)}
                                                        />
                                                        <img
                                                                src={productImg3}
                                                                alt="Thumbnail 3"
                                                                className="w-20 h-20 transition-transform transform cursor-pointer md:h-28 md:w-28 hover:scale-110"
                                                                onClick={() => setMainImage(productImg3)}
                                                        />
                                                        <img
                                                                src={productImg4}
                                                                alt="Thumbnail 4"
                                                                className="w-20 h-20 transition-transform transform cursor-pointer md:h-28 md:w-28 hover:scale-110"
                                                                onClick={() => setMainImage(productImg4)}
                                                        />
                                                </div>
                                        </div>
                                        <div className="md:space-y-4 md:w-[55%] mt-7 md:mt-0">
                                                <h1 className="text-2xl md:text-3xl clash">{productData?.title}</h1>
                                                <div className="flex gap-2">
                                                        <div className="flex gap-1">
                                                                <FaStar className="text-orange-600" />
                                                                <FaStar className="text-orange-600" />
                                                                <FaStar className="text-orange-600" />
                                                                <FaStar className="text-orange-600" />
                                                                <FaStar className="text-orange-600" />
                                                        </div>
                                                        <p>{productData?.reviews.length} Reviews</p>
                                                </div>
                                                <div className="flex gap-3 text-3xl font-bold text-[#00863D]">
                                                        <p>${productData?.price.oneUnit}</p> -
                                                        <p>${productData?.price.fiveUnit}</p>
                                                </div>
                                                <p className="leading-5">{productData?.shortDescription}</p>
                                                <div className="flex gap-10 items-center mt-10 md:mt-0">
                                                        <h1 className="text-2xl font-bold">Weight</h1>
                                                        {/* Dropdown for weight selection */}
                                                        <select
                                                                value={selectedWeight}
                                                                onChange={(e) => setSelectedWeight(e.target.value)}
                                                                className="border rounded-xl px-4 py-3 w-[40%] bg-gray-200"
                                                        >
                                                                <option value="oneUnit">1 Unit</option>
                                                                <option value="twoUnit">2 Unit</option>
                                                                <option value="threeUnit">3 Unit</option>
                                                                <option value="fourUnit">4 Unit</option>
                                                                <option value="fiveUnit">5 Unit</option>
                                                        </select>
                                                </div>

                                                {/* Quantity and Price */}
                                                <div className="flex gap-4 items-center mt-3">
                                                        <div className="flex gap-3 items-center p-2 font-semibold rounded-2xl border border-gray-300">
                                                                <button
                                                                        onClick={() =>
                                                                                setQuantity((prev) =>
                                                                                        prev > 1 ? prev - 1 : 1,
                                                                                )
                                                                        }
                                                                        className="px-3 py-1 bg-gray-200 rounded-2xl border"
                                                                >
                                                                        -
                                                                </button>
                                                                <span className="text-xl">{quantity}</span>
                                                                <button
                                                                        onClick={() => setQuantity((prev) => prev + 1)}
                                                                        className="px-3 py-1 bg-gray-200 rounded-2xl border"
                                                                >
                                                                        +
                                                                </button>
                                                        </div>
                                                        <p className="text-xl font-bold text-[#005125]">
                                                                ${totalPrice.toFixed(2)}
                                                        </p>
                                                </div>

                                                {/* Add to Cart Button */}
                                                <div className="flex gap-4 mb-5 font-bold md:text-xl md:mb-0">
                                                        <button
                                                                onClick={() => toast.success('product added to cart!')}
                                                                className="mt-4 w-40  text-[#005125] px-5 py-3 rounded-xl border border-[#005125] hover:bg-[#006F2C] hover:text-white"
                                                        >
                                                                Add to Cart
                                                        </button>
                                                        <Link to={'/cart'}>
                                                                <button className="mt-4 w-40 bg-[#005125] text-white px-5 py-3 rounded-xl hover:bg-[#006F2C]">
                                                                        Order Now
                                                                </button>
                                                        </Link>
                                                </div>
                                                <h1 className="flex gap-2 items-center">
                                                        <span className="font-bold">Available:</span>
                                                        {productData?.availability === 'available' ? (
                                                                <span className="flex gap-1 text-green-600">
                                                                        In Stock <FiCheckSquare />
                                                                </span>
                                                        ) : (
                                                                <span className="text-red-500">Out Of Stock</span>
                                                        )}
                                                </h1>
                                                <h1>
                                                        <span className="font-bold">Tags: </span> {productData?.tags}
                                                </h1>
                                                <h1>
                                                        <span className="font-bold">Category:</span>{' '}
                                                        {productData?.category}
                                                </h1>
                                        </div>
                                </div>
                                <div className="mt-10">
                                        <ConfigProvider
                                                theme={{
                                                        token: {
                                                                colorPrimary: '#173616', // Set your active tab underline color
                                                        },
                                                }}
                                        >
                                                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                                        </ConfigProvider>
                                </div>
                        </div>
                        <div className="px-8 mx-auto mb-10 max-w-7xl font-fontTwo">
                                <h1 className="clash md:text-4xl text-2xl border-b-4 border-[#00863D] md:w-[28%] w-[70%]">
                                        <span className="text-[#00863D]">Related</span> Products
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                        {relatedProductData?.map((product, i) => (
                                                <ProductCard
                                                        key={i}
                                                        image={product?.image}
                                                        label={product?.label}
                                                        title={product?.title}
                                                        description={product?.description}
                                                        price={product?.price}
                                                />
                                        ))}
                                </div>
                        </div>
                </>
        );
};

export default Product;
