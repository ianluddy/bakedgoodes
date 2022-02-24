import Layout from '../components/layout';
import Image from '../components/image';

function Cakes() {
  return (
    <Layout>
      <h1>Cakes</h1>

      <div>
        <Image 
          src="images/cake1.png" 
          link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          height="350"></Image>
        <Image 
          src="images/cake2.png" 
          link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          height="350"></Image>
        <Image 
          src="images/cake3.png" 
          link="https://www.instagram.com/p/CU24C9SqydC/?utm_source=ig_web_copy_link"
          height="350"></Image>
      </div> 
    </Layout>
  );
}
export default Cakes;