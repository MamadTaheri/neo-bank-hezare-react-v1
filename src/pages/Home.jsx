import { useEffect } from 'react';
import Swal from 'sweetalert2';
import AccountChart from '../components/charts/AccountChart';

const Home = () => {

  useEffect(() => {
    Swal.fire({
      icon: 'info',
      title: 'اطلاعیه',
      confirmButtonText: 'متوجه شدم',
      text: 'این وبسایت هیچ گونه ارتباطی با هیچ بانک و نهاد مالی و اعتباری نداشته و فقط نمونه کار می باشد.',
      footer: '<a class="btn btn-outline-primary" href="https://www.linkedin.com/in/mohammad-taheri1/">تماس با من</a>'
    })
    
  }, [])
  

  return (
    <div className="row justify-content-center">
      <div className="col-md-9 text-center">
        <AccountChart />
      </div>
    </div>
  );
};

export default Home;
