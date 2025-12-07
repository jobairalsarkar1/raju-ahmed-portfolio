import { services } from "@/lib/constants";

export default function Services() {

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        {/* Header */}
        <p className="text-xl font-medium text-gray-600 tracking-wider mb-2">
          My Services
        </p>
        <div className="mb-16 md:flex md:items-start md:gap-8">
          <h2 className="text-[44px] font-bold text-gray-900 leading-tight md:w-[65%]">
            Crafting digital experiences that
            <br />
            transform your vision into reality
          </h2>

          <p className="mt-2 text-2xl text-gray-600 tracking-wide max-w-2xl mb-12 md:mb-0 md:w-[35%]">
            I craft user-centered designs and products that combine creativity,
            functionality, and innovation to deliver meaningful value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`${service.bgClass} rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 border border-white/50`}
              >
                <div className="flex items-start flex-col gap-6">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Icon
                        className={`w-10 h-10 ${service.textClass} opacity-50`}
                      />
                    </div>
                    <span
                      className={`text-[64px] font-bold ${service.textClass} opacity-40`}
                    >
                      {service.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xl text-gray-700 tracking-wide">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
