import React from 'react';
import Image from 'next/image';

const IconTextBanner = () => {
  const bannerItems = [
    {
      icon: 'https://artismore.net/cdn/shop/files/2_compact_08b76a7a-5ebf-408e-8bb1-6f8416a05c99_compact.png?v=1727783114',
      title: '1000+ Five-star reviews',
      description: 'Provide 24/7 full-process service for global buyers',
    },
    {
      icon: 'https://artismore.net/cdn/shop/files/2_compact_9dccbc50-c43e-4e3f-a60d-c5676f91d0dd_compact.png?v=1727783114',
      title: 'Affordable price',
      description: 'Masterfully hand-painted canvas paintings',
    },
    {
      icon: 'https://artismore.net/cdn/shop/files/2_compact_867611e9-b4be-44ca-a9c3-b4e8c7c6de46.png?v=1727783114', //Corrected URL
      title: 'Satisfaction guarantee',
      description: 'Express painting only when the customer is satisfied',
    },
    {
      icon: 'https://artismore.net/cdn/shop/files/3_2_compact_cb6948cc-13e3-4569-9787-bd318bb48d2c_compact.png?v=1727783211',
      title: 'Eco friendly',
      description: 'Environmentally friendly materials to reduce carbon emissions',
    },
  ];

  return (
    <div id="shopify-section-template--23579491729684__icon_text_YMydjR" className="shopify-section new_for_colum-section bg-orange-500 text-white py-8">
      <div className="main_test_grid">
        <div className="container mx-auto">
          <div className="inner_textt grid grid-cols-2 lg:grid-cols-4 gap-8">
            {bannerItems.map((item, index) => (
              <div key={index} className="rpt_omt flex flex-col items-center text-center">
                <div className="icon icon-ico-selection mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    objectFit="contain"
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconTextBanner;