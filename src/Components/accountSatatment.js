import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientAccountTable = () => {
    const [patientAccounts, setPatientAccounts] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [receiptAccounts, setReceiptAccounts] = useState([]);
    const [descriptions, setDescriptions] = useState({});
    const [patienData, setPatientData] = useState(JSON.parse(localStorage.getItem('data')))


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost/api/patient-accounts/${patienData.id}`);
                console.log(response.data)
                const data = response.data;
                // console.log("Fetched patient account data:", data);
                if (data) {
                    // console.log(data.invoices)
                    setPatientAccounts(data.patient_accounts || []);
                    setInvoices(data.invoices || []);
                    setReceiptAccounts(data.receipt_accounts || []);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchServiceName = async (serviceId) => {
            try {
                const response = await axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/services/${serviceId}`);
                // console.log("Service name response for ID", serviceId, ":", response.data.name);
                return response.data.name;
            } catch (error) {
                // console.error("Error fetching service name:", error);
                return "Unknown Service";
            }
        };

        const fetchDescriptions = async () => {
            // console.log("Fetching descriptions...");
            const newDescriptions = {};
            for (const account of patientAccounts) {
                // console.log("Processing account:", account);
                if (account.invoice_id) {
                    const invoice = invoices.find(inv => inv.id === account.invoice_id);
                    // console.log("Found invoice:", invoice);
                    if (invoice) {
                        const serviceId = invoice.Service_id || invoice.Group_id;
                        // console.log("Service ID:", serviceId);
                        if (serviceId) {
                            newDescriptions[account.id] = await fetchServiceName(serviceId);
                        }
                    }
                } else if (account.receipt_id) {
                    const receiptAccount = receiptAccounts.find(rec => rec.id === account.receipt_id);
                    // console.log("Found receipt account:", receiptAccount);
                    if (receiptAccount) {
                        newDescriptions[account.id] = receiptAccount.description;
                    }
                }
            }
            setDescriptions(newDescriptions);
            // console.log("Descriptions fetched:", newDescriptions);
        };

        if (patientAccounts.length > 0 && invoices.length > 0 && receiptAccounts.length > 0) {
            fetchDescriptions();
        } else {
            // console.log("Data not ready for fetching descriptions");
        }
    }, [patientAccounts, invoices, receiptAccounts]);

    // Calculate totals
    const totalDebit = patientAccounts.reduce((acc, account) => acc + parseFloat(account.Debit || 0), 0);
    const totalCredit = patientAccounts.reduce((acc, account) => acc + parseFloat(account.credit || 0), 0);
    const finalBalance = totalDebit - totalCredit;

    return (
        <div className="table-responsive">
            <table className="table table-hover text-md-nowrap text-center" id="example1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date Added</th>
                        <th>Description</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Final Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {patientAccounts.length === 0 ? (
                        <tr>
                            <td colSpan="6">No patient accounts available.</td>
                        </tr>
                    ) : (
                        patientAccounts.map((account, index) => {
                            const description = descriptions[account.id] || "Loading...";
                            // console.log(`Rendering account id ${account.id} with description: ${description}`);
                            return (
                                <tr key={account.id}>
                                    <td>{index + 1}</td>
                                    <td>{account.date}</td>
                                    <td>{description}</td>
                                    <td>{parseFloat(account.Debit || 0).toFixed(2)}</td>
                                    <td>{parseFloat(account.credit || 0).toFixed(2)}</td>
                                    {index === patientAccounts.length - 1 ? (
                                        <td>
                                            {finalBalance.toFixed(2)} {finalBalance > 0 ? 'Debit' : 'Credit'}
                                        </td>
                                    ) : (
                                        <td></td>
                                    )}
                                </tr>
                            );
                        })
                    )}
                    {patientAccounts.length > 0 && (
                        <tr>
                            <th colSpan="3" scope="row" className="table-success">
                                Total
                            </th>
                            <td className="table-primary">{totalDebit.toFixed(2)}</td>
                            <td className="table-primary">{totalCredit.toFixed(2)}</td>
                            <td className="table-danger">
                                <span className="text-danger">{finalBalance.toFixed(2)} {finalBalance > 0 ? 'Debit' : 'Credit'}</span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PatientAccountTable;
