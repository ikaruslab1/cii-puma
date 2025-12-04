import LogoLoop from './LogoLoop';

const imageLogos = [
    { src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/6930504d0026f8982f8e/files/693053fb0002cb0492dd/view?project=69304e09002505d69656&mode=admin", alt: "UNAM", href: "https://www.unam.mx/" },
    { src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/6930504d0026f8982f8e/files/693053eb003b5848fa97/view?project=69304e09002505d69656&mode=admin", alt: "FESA", href: "https://www.unam.mx/" },
    { src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/6930504d0026f8982f8e/files/693056bd0013bcdd3f4a/view?project=69304e09002505d69656&mode=admin", alt: "Qaldas", href: "https://qaldas.com/" },
    { src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/6930504d0026f8982f8e/files/693056c2000d39dd75df/view?project=69304e09002505d69656&mode=admin", alt: "QMéxico", href: "https://qmexico.org/" },

];

function BandaLogos() {
    return (
        <div className='relative overflow-hidden h-full'>
            <LogoLoop
                logos={imageLogos}
                speed={55}
                direction="left"
                logoHeight={100}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </div>
    );
}

export default BandaLogos;