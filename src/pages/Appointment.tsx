
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { barbers, services, generateTimeSlots, type TimeSlot } from '../data/mockData';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, Clock, User, Scissors, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const AppointmentPage = () => {
  const [searchParams] = useSearchParams();
  
  const [step, setStep] = useState(1);
  const [selectedBarberId, setSelectedBarberId] = useState<number | null>(
    searchParams.get('barbeiro') ? Number(searchParams.get('barbeiro')) : null
  );
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    searchParams.get('servico') ? Number(searchParams.get('servico')) : null
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);
  
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  // Get the selected barber and service objects
  const selectedBarber = barbers.find(b => b.id === selectedBarberId);
  const selectedService = services.find(s => s.id === selectedServiceId);
  
  // Generate time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const slots = generateTimeSlots(selectedDate);
      setTimeSlots(slots);
      setSelectedTimeId(null); // Reset time selection when date changes
    }
  }, [selectedDate]);
  
  // Move to the next step
  const nextStep = () => {
    if (step === 1 && !selectedBarberId) {
      toast({
        title: "Selecione um barbeiro",
        description: "Por favor, escolha um barbeiro para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && !selectedServiceId) {
      toast({
        title: "Selecione um serviço",
        description: "Por favor, escolha um serviço para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 3 && (!selectedDate || !selectedTimeId)) {
      toast({
        title: "Selecione data e horário",
        description: "Por favor, escolha uma data e horário para continuar.",
        variant: "destructive"
      });
      return;
    }

    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  // Submit the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName || !customerPhone || !customerEmail) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the data to a backend
    console.log({
      barberId: selectedBarberId,
      serviceId: selectedServiceId,
      date: selectedDate,
      timeSlot: timeSlots.find(t => t.id === selectedTimeId)?.time,
      customerInfo: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail,
        notes: customerNotes
      }
    });
    
    // Show success message
    toast({
      title: "Agendamento realizado com sucesso!",
      description: `Seu agendamento foi confirmado para ${format(selectedDate!, 'dd/MM/yyyy')} às ${timeSlots.find(t => t.id === selectedTimeId)?.time}.`,
      variant: "default"
    });
    
    // Move to the confirmation step
    setStep(5);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="bg-barber-light">
      {/* Header */}
      <div className="bg-barber-black text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-barber-gold">Agendar Horário</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Selecione seu barbeiro, serviço e horário preferido para agendar seu atendimento.
          </p>
        </div>
      </div>

      {/* Steps Indicator */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center max-w-3xl mx-auto mb-8">
          {[1, 2, 3, 4].map((stepNum) => (
            <div 
              key={stepNum} 
              className="flex flex-col items-center w-full"
            >
              <div 
                className={`w-10 h-10 rounded-full ${
                  stepNum === step ? 'bg-barber-gold text-barber-black' : 
                  stepNum < step ? 'bg-barber-gold/20 text-barber-black' : 
                  'bg-gray-200 text-gray-500'
                } flex items-center justify-center font-medium relative z-10`}
              >
                {stepNum < step ? <Check size={16} /> : stepNum}
              </div>
              <span className={`text-xs mt-2 ${stepNum === step ? 'text-barber-black font-medium' : 'text-gray-500'}`}>
                {stepNum === 1 ? 'Barbeiro' : 
                 stepNum === 2 ? 'Serviço' : 
                 stepNum === 3 ? 'Data/Hora' : 'Informações'}
              </span>
              {stepNum < 4 && (
                <div className={`h-0.5 w-full ${
                  stepNum < step ? 'bg-barber-gold/20' : 'bg-gray-200'
                } absolute top-5 left-1/2 transform -translate-y-1/2 hidden sm:block`} />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Step Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Select Barber */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-2 text-barber-gold" />
                Escolha seu Barbeiro
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {barbers.map((barber) => (
                  <div 
                    key={barber.id}
                    onClick={() => setSelectedBarberId(barber.id)}
                    className={`
                      border-2 rounded-lg overflow-hidden cursor-pointer transition-all
                      ${selectedBarberId === barber.id 
                        ? 'border-barber-gold shadow-md' 
                        : 'border-transparent hover:border-gray-200'}
                    `}
                  >
                    <Card className="h-full">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row h-full">
                          <div className="w-full sm:w-1/3 h-40 sm:h-auto bg-gray-200">
                            <img 
                              src={barber.image} 
                              alt={barber.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 sm:p-6 flex flex-col w-full sm:w-2/3">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold text-lg">{barber.name}</h3>
                              {selectedBarberId === barber.id && (
                                <div className="bg-barber-gold text-white w-6 h-6 rounded-full flex items-center justify-center">
                                  <Check size={16} />
                                </div>
                              )}
                            </div>
                            <p className="text-barber-gold text-sm font-medium">{barber.role}</p>
                            <p className="text-gray-500 text-sm mt-1">
                              <span className="font-medium">Experiência:</span> {barber.experience}
                            </p>
                            <div className="mt-2">
                              <span className="text-sm text-gray-600 block">Especialidades:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {barber.specialties.slice(0, 2).map((specialty, i) => (
                                  <span 
                                    key={i} 
                                    className="bg-barber-gold/10 text-xs px-2 py-1 rounded-full"
                                  >
                                    {specialty}
                                  </span>
                                ))}
                                {barber.specialties.length > 2 && (
                                  <span className="text-xs text-gray-500">+{barber.specialties.length - 2}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  onClick={nextStep}
                  disabled={!selectedBarberId}
                  className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 w-full max-w-xs"
                >
                  Continuar
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 2: Select Service */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Scissors className="mr-2 text-barber-gold" />
                Escolha o Serviço
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`
                      border-2 rounded-lg overflow-hidden cursor-pointer transition-all
                      ${selectedServiceId === service.id 
                        ? 'border-barber-gold shadow-md' 
                        : 'border-transparent hover:border-gray-200'}
                    `}
                  >
                    <Card className="h-full">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">{service.name}</h3>
                          {selectedServiceId === service.id && (
                            <div className="bg-barber-gold text-white w-6 h-6 rounded-full flex items-center justify-center">
                              <Check size={16} />
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-barber-gold font-medium">
                            R$ {service.price.toFixed(2)}
                          </span>
                          <span className="text-gray-500 text-sm flex items-center">
                            <Clock size={14} className="mr-1" />
                            {service.duration} min
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 mt-8 justify-center">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border-barber-black text-barber-black hover:bg-barber-black/10 w-32"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={!selectedServiceId}
                  className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 w-32"
                >
                  Continuar
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 3: Select Date and Time */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="mr-2 text-barber-gold" />
                Escolha Data e Horário
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Selecione a Data:</h3>
                  <CalendarUI
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border shadow"
                    locale={ptBR}
                    disabled={{ before: new Date() }}
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Horários Disponíveis:</h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <div 
                          key={slot.id} 
                          onClick={() => slot.available ? setSelectedTimeId(slot.id) : null}
                          className={`
                            p-2 border rounded-md text-center cursor-pointer
                            ${!slot.available 
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                              : selectedTimeId === slot.id
                                ? 'bg-barber-gold text-white border-barber-gold' 
                                : 'hover:border-barber-gold hover:bg-barber-gold/5'}
                          `}
                        >
                          {slot.time}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">Por favor, selecione uma data primeiro.</p>
                  )}
                  
                  {timeSlots.length > 0 && !timeSlots.some(slot => slot.available) && (
                    <div className="mt-4 bg-red-50 p-3 rounded-md text-red-600 text-sm">
                      <p className="font-medium">Não há horários disponíveis nesta data.</p>
                      <p>Por favor, selecione outra data.</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-4 mt-8 justify-center">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border-barber-black text-barber-black hover:bg-barber-black/10 w-32"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={!selectedTimeId}
                  className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 w-32"
                >
                  Continuar
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 4: Customer Information */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-2 text-barber-gold" />
                Suas Informações
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input 
                          id="phone" 
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="(00) 00000-0000"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Observações (opcional)</Label>
                      <Textarea 
                        id="notes"
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                        placeholder="Alguma informação adicional ou preferência específica"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Appointment Summary */}
                <div className="bg-barber-black/5 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Resumo do Agendamento</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Barbeiro:</span>
                      <span className="font-medium">{selectedBarber?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Serviço:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data:</span>
                      <span className="font-medium">
                        {selectedDate ? format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ''}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hora:</span>
                      <span className="font-medium">{timeSlots.find(t => t.id === selectedTimeId)?.time}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t">
                      <span className="text-gray-600">Valor:</span>
                      <span className="font-bold text-barber-gold">
                        R$ {selectedService?.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-barber-black text-barber-black hover:bg-barber-black/10 w-32"
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-barber-gold text-barber-black hover:bg-barber-gold/90 w-32"
                  >
                    Confirmar
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="animate-fade-in text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Agendamento Confirmado!</h2>
              <p className="text-gray-600 mb-8">
                Seu horário foi agendado com sucesso. Enviamos um e-mail de confirmação para {customerEmail}.
              </p>
              
              <div className="bg-barber-black/5 p-6 rounded-lg max-w-md mx-auto mb-8 text-left">
                <h3 className="font-bold mb-4">Detalhes do Agendamento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Barbeiro:</span>
                    <span className="font-medium">{selectedBarber?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Serviço:</span>
                    <span className="font-medium">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data:</span>
                    <span className="font-medium">
                      {selectedDate ? format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ''}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hora:</span>
                    <span className="font-medium">{timeSlots.find(t => t.id === selectedTimeId)?.time}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="text-gray-600">Valor:</span>
                    <span className="font-bold text-barber-gold">
                      R$ {selectedService?.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-barber-gold text-barber-black hover:bg-barber-gold/90"
                >
                  Voltar para o Início
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
