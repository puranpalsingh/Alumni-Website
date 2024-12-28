import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";

export default function HeroSection() {
    return(
        
        <div className="realtive grid grid-cols-1 md:grid-cols-2 w-4xl h-full p-6 md:p-0 bg-cover bg-center rounded-lg shadow-lg text-white" style={{backgroundImage : `url(/image.png)`}}>
            
            <div className="absolute inset-0  rounded-lg hidden md:block">  
            </div>
            <div className="relative z-10 max-w-4xl text-center md:text-left bg-white/40 rounded-lg md:p-12">
                <h1 className="text-5xl font-bold mb-4 text-center"> Our Alumni</h1>
                <br/>
                <p className="text-sm leading-relaxed mb-4 text-red-900 md:text-2xl font-bold">
                    The Alumni of SAE NIT Kurukshetra have been a vital part of the team's success and have contributed immensely to its legacy. Their support and guidance have been crucial in shaping the team's culture and helping the current members reach new heights.
                </p>
                <p className="text-sm leading-relaxed mb-4 md:text-2xl font-bold text-red-900">
                    Alumni have been instrumental in providing resources, expertise, and
                    mentorship to the team. They have also played a significant role in
                    boosting the team's morale and providing inspiration through their
                    own successes and achievements.
                </p>
                <p className="text-sm leading-relaxed md:text-2xl font-bold text-red-900">
                    Moreover, the alumni have added a rich history and legacy to SAE NIT
                    KKR, which the team takes great pride in. Their contributions and
                    achievements have helped to establish the team's reputation as a
                    leader in the world of formula racing.
                </p>
            </div>
        </div>
            
        
    );
}

  