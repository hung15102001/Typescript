import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../component/Banner";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="">
      <Banner />
      <h1 className="text-center my-4">Có Những Con Mèo Béo Nhất</h1>
     <p> Nếu bạn là một người thích các loại mèo Ba Tư thì hãy đến ngay cửa hàng
      bán mèo ở Hà Nội – Sherydoll. Trang trại này chuyên nuôi các giống mèo Ba
      Tư thuần chủng và số lượng ước tính lên đến cả mấy chục con. Mèo cảnh tại
      Shery Doll luôn được ưu tiên về mặt chất lượng. Hầu như các giống mèo cảnh
      đều có giấy chứng nhận và kiểm dịch đầy đủ. Ngoài các chú mèo Ba Tư ra thì
      shop còn bán rất nhiều loại mèo cảnh khác nữa cho bạn thoải mái lựa chọn.</p>
      
      <Carousel>
    <div className="img">
        <img src="img/meo1.jpg" />
        <p className="legend ">Shop Mèo Béo</p>
    </div>
    <div className="img">
        <img src="img/meo2.jpg" />
        <p className="legend">Đưa Mèo Béo Đến Mọi Nhà</p>
    </div>
    <div className="img">
        <img src="img/meo3.jpg" />
        <p className="legend">KHông Béo Hoàn Trả 200%</p>
    </div>
  </Carousel>


      <p>cửa hàng bán mèo ở Hà Nội Trại Mèo Sherydoll Những chú mèo này đều có
      nguồn gốc từ nước ngoài, SheryDolls cũng chăm sóc chúng vô cùng chu đáo
      với các loại thức ăn cao cấp đắt tiền nhất hiện tại. Tuy nhiên giá thành
      của những chú mèo tại đây thì rất cao thậm chí là cao hơn nhiều so với
      những nơi khác. Nhưng đổi lại, tất cả mèo của SheryDolls đều được bán với
      hợp đồng và sổ sức khỏe cùng với gia phả do TICA hoặc CFA chứng nhận. Nên
      bạn có thể hoàn toàn yên tâm khi mua mèo tại đây.</p> 
    </div>
  );
};

export default About;
