import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Heart,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Building,
  CreditCard,
  Printer,
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { DonationRecord } from '../types';

export const DonateView: React.FC = () => {
  const { siteSettings, processDonation, addToast } = useData();

  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [cause, setCause] = useState<DonationRecord['cause']>('General Rights Advocacy');

  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<DonationRecord['paymentMethod']>('Paystack');
  const [isProcessing, setIsProcessing] = useState(false);

  const ngnPresets = [5000, 10000, 25000, 50000, 100000];
  const usdPresets = [25, 50, 100, 250, 500];

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (val: string) => {
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || amount <= 0) {
      addToast('error', 'Incomplete Form', 'Please specify a donation amount and valid donor email.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      processDonation({
        donorName: isAnonymous ? 'Anonymous Supporter' : (donorName || 'Generous Donor'),
        email,
        phone,
        amount,
        currency,
        frequency,
        cause,
        paymentMethod,
        isAnonymous
      });
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Heart className="w-3.5 h-3.5 text-emerald-400" />
            <span>Empower Rights & Protect Dignity</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Support Our Grassroots Human Rights Work
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Your charitable donation directly funds pro-bono bail defense, simplified constitutional handbooks, emergency shelter referrals for GBV survivors, and grassroots legal clinics across Nigeria.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Impact & Bank Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Donation Engine (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0B1E36]">
                    Make a Secure Contribution
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    100% transparent fiduciary management and official electronic receipting.
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency('NGN');
                      setAmount(10000);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currency === 'NGN' ? 'bg-white text-[#0B1E36] shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    NGN (₦)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency('USD');
                      setAmount(50);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currency === 'USD' ? 'bg-white text-[#0B1E36] shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              <form onSubmit={handleDonate} className="space-y-6 text-slate-800 text-xs sm:text-sm">
                {/* Frequency Toggle */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Donation Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        frequency === 'one-time'
                          ? 'border-blue-900 bg-blue-50 text-blue-950 ring-1 ring-blue-900'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>One-Time Gift</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        frequency === 'monthly'
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-700'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Monthly Sustaining Partner</span>
                    </button>
                  </div>
                </div>

                {/* Preset Amounts */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Select Amount ({currency})
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                    {(currency === 'NGN' ? ngnPresets : usdPresets).map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handlePresetClick(val)}
                        className={`py-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                          amount === val && !customAmount
                            ? 'bg-[#0B1E36] text-white border-[#0B1E36] shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {currency === 'NGN' ? '₦' : '$'}
                        {val.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <div className="mt-3">
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomChange(e.target.value)}
                      placeholder={`Or enter custom amount in ${currency}...`}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Designated Cause Allocation */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Designate Your Contribution To:
                  </label>
                  <select
                    value={cause}
                    onChange={(e) => setCause(e.target.value as DonationRecord['cause'])}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="General Rights Advocacy">General Rights Advocacy & Greatest Need</option>
                    <option value="Legal Aid & Clinic Outreach">Legal Aid & Field Clinic Outreach</option>
                    <option value="Women & Children Protection Fund">Women & Children Protection Fund</option>
                    <option value="Community Rights Education Materials">Community Rights Education Handbooks</option>
                  </select>
                </div>

                {/* Donor Details */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name {isAnonymous && '(Will be kept private)'}
                      </label>
                      <input
                        type="text"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="e.g. Alaba Olumide"
                        disabled={isAnonymous}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none disabled:bg-slate-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (For Official Receipt) *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alaba@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonCheck"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                    <label htmlFor="anonCheck" className="text-xs text-slate-600 cursor-pointer">
                      Make this donation anonymous on public acknowledgments.
                    </label>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Payment Gateway
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Paystack', 'Flutterwave', 'Bank Transfer'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setPaymentMethod(m)}
                        className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all text-center ${
                          paymentMethod === m
                            ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Heart className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span>
                    {isProcessing
                      ? 'Processing Secure Donation...'
                      : `Donate ${currency === 'NGN' ? '₦' : '$'}${amount.toLocaleString()} Now`}
                  </span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-Bit SSL Encrypted • Instant Official Receipt Generated</span>
                </div>
              </form>
            </div>
          </div>

          {/* Column 2: Direct Bank Details & Financial Accountability (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Bank Account Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
                <Building className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-bold text-sm text-white">Direct Official Bank Account</h3>
                  <p className="text-[11px] text-slate-400">For direct wire, USSD, or institutional transfers</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Account Name</span>
                  <p className="font-bold text-white text-sm">{siteSettings.bankDetails.accountName}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">Bank Name</span>
                    <p className="font-bold text-amber-300 text-sm">{siteSettings.bankDetails.bankName}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">Account Number</span>
                    <p className="font-mono font-bold text-emerald-400 text-sm">{siteSettings.bankDetails.accountNumber}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Sort / Reference</span>
                  <p className="font-mono text-slate-300 text-xs">{siteSettings.bankDetails.sortCode}</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                After making a direct transfer, you can email your confirmation receipt to <strong>{siteSettings.officialEmail}</strong> for formal receipting and quarterly project reports.
              </p>
            </div>

            {/* Fiduciary Transparency */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-sm text-[#0B1E36] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Our Transparency & Audit Guarantee</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% of designated program funds go directly to grassroots execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Annual financial audits published openly for public and donor scrutiny.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero administrative deduction on emergency bail intervention grants.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
