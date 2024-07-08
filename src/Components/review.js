import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceReview = () => {
  const [invoices, setInvoices] = useState([]);
  const [services, setServices] = useState({});

  const [patienData, setPatientData] = useState(JSON.parse(localStorage.getItem('data')))


  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(`http://localhost/api/patients/${patienData.id}/invoices/review`);
        console.log(response.data)
        setInvoices(response.data);

        // Fetch service details for each invoice
        const servicePromises = response.data.map(invoice =>
          axios.get(`http://localhost/api/services/${invoice.Service_id}`)
        );

        const serviceResponses = await Promise.all(servicePromises);

        // Map service IDs to service names
        const servicesMap = {};
        serviceResponses.forEach(serviceResponse => {
          const service = serviceResponse.data;
          servicesMap[service.id] = service.name;
        });

        setServices(servicesMap);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="table-responsive text-center">
      <table className="table w-100">
        <thead>
          <tr>
            <th scope="col m-3">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Price</th>
            <th scope="col">Invoice Date</th>
            <th scope="col">Discount Value</th>
            <th scope="col">Tax Rate</th>
            <th scope="col">Total with Tax</th>
            <th scope="col">Invoice Type</th>
            <th scope="col">Review Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={invoice.id}>
              <th scope="row">{index + 1}</th>
              <td>{services[invoice.Service_id] || 'Unknown Service'}</td>
              <td>{invoice.price}</td>
              <td>{invoice.invoice_date}</td>
              <td>{invoice.discount_value}</td>
              <td>{invoice.tax_rate}%</td>
              <td>{invoice.total_with_tax}</td>
              <td>{invoice.invoice_type === 1 ? 'Cash' : 'Credit'}</td>
              <td>{invoice.patient_history ? invoice.patient_history.review_date : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceReview;
