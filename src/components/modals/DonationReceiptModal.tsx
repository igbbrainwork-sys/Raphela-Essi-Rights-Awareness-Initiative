import React from 'react';
import { useData } from '../../context/DataContext';
import {
  X,
  Scale,
  CheckCircle2,
  Printer,
  Download,
  ShieldCheck,
  Heart
} from 'lucide-react';

export const DonationReceiptModal: React.FC = () => {
  const { activeReceipt, setActiveReceipt, siteSettings } = useData();

  if (!activeReceipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Top bar */}
        <div className="bg-emerald-800 text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-800 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Official Donation Certificate</h3>
              <p className="text-xs text-emerald-200">Thank you for standing for human dignity & justice</p>
            </div>
          </div>

          <button
            onClick={() => setActiveReceipt(null)}
            className="text-emerald-100 hover:text-white bg-emerald-900/60 p-2 rounded-full cursor-pointer"
            aria-label="Close receipt"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Paper View */}
        <div id="printable-receipt" className="p-6 sm:p-8 space-y-6 text-slate-800 bg-[#FCFBF8] border-b border-slate-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-900" />
                <span className="font-bold text-base text-[#0B1E36]">
                  {siteSettings.organizationName}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                Reg Status: {siteSettings.cacRegistrationNumber}
              </p>
              <p className="text-[11px] text-slate-500">{siteSettings.officeAddress}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                {activeReceipt.receiptNumber}
              </span>
              <p className="text-[10px] text-slate-400 font-mono mt-1">
                Ref: {activeReceipt.transactionRef}
              </p>
            </div>
          </div>

          {/* Amount Box */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
              Contribution Received
            </span>
            <div className="text-3xl font-extrabold text-[#0B1E36]">
              {activeReceipt.currency === 'NGN' ? '₦' : '$'}
              {activeReceipt.amount.toLocaleString()}
            </div>
            <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              {activeReceipt.frequency.toUpperCase()} DONATION • {activeReceipt.paymentMethod}
            </span>
          </div>

          {/* Details Table */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-500 block">Donor Name:</span>
              <span className="font-bold text-slate-800">
                {activeReceipt.isAnonymous ? 'Anonymous Donor (Protected)' : activeReceipt.donorName}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Donor Email:</span>
              <span className="font-medium text-slate-800">{activeReceipt.email}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Designated Programme:</span>
              <span className="font-bold text-blue-900">{activeReceipt.cause}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Date & Time (WAT):</span>
              <span className="font-mono text-slate-700">
                {new Date(activeReceipt.timestamp).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Transparency & Non-profit statement */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-50/70 border border-blue-200/70 text-[11px] text-blue-900">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <p>
              This electronic receipt acknowledges charitable support provided to the Raphela Essi Rights Awareness Initiative. 100% of non-designated donations directly fund grassroots rights education, pro-bono emergency referral, and legal literacy materials.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-white flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print / Save PDF Receipt</span>
          </button>

          <button
            onClick={() => setActiveReceipt(null)}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
