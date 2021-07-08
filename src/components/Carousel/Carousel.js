import { Carousel } from 'antd';


export default function CarouselItem() {

    return <div className='ant-carousel'>
        <Carousel autoplay>
            <div>
                <img src='https://macolaevolve.com/2018-evolve/wp-content/uploads/2018/01/evolve-banner-template-hotel-1-16-2000x400.png' alt='hotel' ></img>
            </div>
            <div>
                <img src='https://stayatthei.com/sites/default/files/Air%20Quality%20Banner2.png' alt='hotel' ></img>
            </div>
        </Carousel>

    </div>

}