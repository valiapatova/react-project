import WhyUsList from './WhyUsList.jsx';

export default function WhyUs() {
    return (
        <section className="why_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Защо да изберете <span>Рагон 14</span>
                    </h2>
                </div>

                <WhyUsList />

                <div className="btn-box">
                    <a href="">
                        Read More
                    </a>
                </div>
            </div>
        </section>
    );
};