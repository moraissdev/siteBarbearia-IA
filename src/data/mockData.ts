export interface Barber {
  id: number;
  name: string;
  image: string;
  role: string;
  experience: string;
  bio: string;
  specialties: string[];
  availability: {
    day: string;
    hours: string;
  }[];
}

export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number; // in minutes
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  photo: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

export const barbers: Barber[] = [
  {
    id: 1,
    name: "Rafael Silva",
    image: "/images/barber1.jpg",
    role: "Mestre Barbeiro",
    experience: "10 anos",
    bio: "Especialista em cortes clássicos e modernos, com técnicas precisas aperfeiçoadas através de uma década de experiência.",
    specialties: ["Cortes Degradê", "Barba Completa", "Tratamentos Capilares"],
    availability: [
      { day: "Segunda a Sexta", hours: "09:00 - 19:00" },
      { day: "Sábado", hours: "09:00 - 17:00" }
    ]
  },
  {
    id: 2,
    name: "André Costa",
    image: "/images/barber2.jpg",
    role: "Barbeiro Senior",
    experience: "7 anos",
    bio: "Mestre em estilos contemporâneos, André traz tendências internacionais adaptadas ao estilo brasileiro.",
    specialties: ["Cortes Modernos", "Barba Estilizada", "Coloração"],
    availability: [
      { day: "Terça a Sábado", hours: "10:00 - 20:00" }
    ]
  },
  {
    id: 3,
    name: "Lucas Mendes",
    image: "/images/barber3.jpg",
    role: "Barbeiro Estilista",
    experience: "5 anos",
    bio: "Com formação internacional, Lucas é especialista em transformações radicais que valorizam o estilo pessoal.",
    specialties: ["Design de Barba", "Cortes Criativos", "Hidratação Capilar"],
    availability: [
      { day: "Segunda a Quinta", hours: "09:00 - 18:00" },
      { day: "Sábado", hours: "10:00 - 16:00" }
    ]
  },
  {
    id: 4,
    name: "Marcelo Rocha",
    image: "/images/barber4.jpg",
    role: "Barbeiro Especialista",
    experience: "8 anos",
    bio: "Marcelo combina técnicas tradicionais com tendências atuais, criando estilos únicos para cada cliente.",
    specialties: ["Cortes Executivos", "Barba Tradicional", "Sobrancelha"],
    availability: [
      { day: "Segunda, Quarta e Sexta", hours: "10:00 - 20:00" },
      { day: "Sábado", hours: "09:00 - 18:00" }
    ]
  }
];

export const services: Service[] = [
  {
    id: 1,
    name: "Corte Clássico",
    price: 35,
    duration: 30,
    description: "Corte tradicional com tesoura e máquina, finalizado com produtos de alta qualidade.",
    image: "/images/service1.jpg"
  },
  {
    id: 2,
    name: "Corte Degradê",
    price: 45,
    duration: 40,
    description: "Técnica de transição suave entre diferentes comprimentos, criando um efeito gradual.",
    image: "/images/service2.jpg"
  },
  {
    id: 3,
    name: "Barba Completa",
    price: 30,
    duration: 25,
    description: "Modelagem e aparo da barba, com toalha quente, óleos essenciais e finalização.",
    image: "/images/service3.jpg"
  },
  {
    id: 4,
    name: "Pacote Completo",
    price: 70,
    duration: 60,
    description: "Inclui corte de cabelo, serviço de barba completo e tratamento facial.",
    image: "/images/service4.jpg"
  },
  {
    id: 5,
    name: "Tratamento Capilar",
    price: 50,
    duration: 45,
    description: "Hidratação profunda ou reconstrução para cabelos danificados.",
    image: "/images/service5.jpg"
  },
  {
    id: 6,
    name: "Design de Sobrancelhas",
    price: 20,
    duration: 15,
    description: "Modelagem de sobrancelhas masculinas com técnicas precisas.",
    image: "/images/service6.jpg"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    photo: "/images/client1.jpg",
    rating: 5,
    comment: "Melhor barbearia que já frequentei! O Rafael tem mãos de artista, e o ambiente é muito aconchegante.",
    service: "Corte Degradê",
    date: "15/04/2025"
  },
  {
    id: 2,
    name: "Fernando Almeida",
    photo: "/images/client2.jpg",
    rating: 5,
    comment: "Atendimento nota 10 e resultado excepcional. Recomendo o tratamento de barba com o André.",
    service: "Barba Completa",
    date: "02/04/2025"
  },
  {
    id: 3,
    name: "Roberto Gomes",
    photo: "/images/client3.jpg",
    rating: 4,
    comment: "Gostei muito do resultado e do ambiente. A experiência com toalha quente na barba é sensacional.",
    service: "Pacote Completo",
    date: "28/03/2025"
  },
  {
    id: 4,
    name: "Paulo Henrique",
    photo: "/images/client4.jpg",
    rating: 5,
    comment: "Desde que comecei a frequentar esta barbearia, não quis mais saber de outra. Atendimento personalizado e resultados impressionantes.",
    service: "Corte Clássico",
    date: "10/03/2025"
  }
];

export const generateTimeSlots = (date: Date): TimeSlot[] => {
  // Generating mock time slots for the selected date
  const slots: TimeSlot[] = [];
  const startHour = 9; // 9 AM
  const endHour = 19; // 7 PM
  const interval = 30; // 30 minutes per slot
  
  // Current date to compare for availability
  const currentDate = new Date();
  const isToday = date.toDateString() === currentDate.toDateString();
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      // Randomly determine if the slot is available, but make sure past times today are not available
      let available = Math.random() > 0.3; // 70% chance of being available
      
      if (isToday) {
        const slotTime = new Date(date);
        slotTime.setHours(hour, minute);
        if (slotTime < currentDate) {
          available = false; // Past times are not available
        }
      }
      
      slots.push({
        id: slots.length + 1,
        time: timeString,
        available
      });
    }
  }
  
  return slots;
};
