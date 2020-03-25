import React from 'react';

class Company extends React.Component{
    render(){
        return(
            <div className="company">
                <h2 className="company__header block_header">Наша компания</h2>
                <div className="company-why">
                    <div className="company-why__background">
                        <h3>Почему мы?</h3>
                        <p>Люди – профессионалы с большим опытом работы. 
                            Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. 
                            Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного
                        </p>
                        <div className="vl_company-first"></div>
                    </div>
                </div>
                <div className="company-advantage">
                    <div className="company-advantage__background">
                        <h3>Наши преимущества</h3>
                        <p>Люди – профессионалы с большим опытом работы. 
                            Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. 
                            Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного
                        </p>
                        <div className="vl_company-sec"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Company;

