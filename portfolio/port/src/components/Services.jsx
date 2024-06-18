import React from 'react';

function Services() {
  // You can fetch service data from an API or use static data
  const services = [
    { id: 1, name: 'Service 1', description: 'This is service 1' },
    { id: 2, name: 'Service 2', description: 'This is service 2' },
    // Add more services here
  ];

  return (
    <div className="services-section">
      <h2>Services</h2>
      {services.map((service) => (
        <div key={service.id} className="service">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;