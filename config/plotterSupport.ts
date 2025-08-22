export interface PlotterDriver {
  readonly name: string;
  readonly version: string;
  readonly size: string;
  readonly os: string;
  readonly downloadUrl: string;
  readonly releaseDate: string;
  readonly fileType: string;
}

export interface PlotterBrand {
  readonly title: string;
  readonly description: string;
  readonly drivers: readonly PlotterDriver[];
}

export const PLOTTER_SUPPORT_DATA: PlotterBrand[] = [
  {
    title: "Summa Plotter Drivers",
    description: "Download the latest drivers for Summa S2, S3, and other Summa plotter models. Compatible with Windows and macOS operating systems.",
    drivers: [
      {
        name: "Summa S2/S3 Driver",
        version: "2.1.4",
        size: "45.2 MB",
        os: "Windows 10/11",
        downloadUrl: "/downloads/plotter-driver-windows.exe",
        releaseDate: "2024-01-15",
        fileType: "exe"
      },
      {
        name: "Summa S2/S3 Driver",
        version: "2.1.4",
        size: "52.1 MB",
        os: "macOS 12+",
        downloadUrl: "/downloads/plotter-driver-macos.dmg",
        releaseDate: "2024-01-15",
        fileType: "dmg"
      }
    ]
  },
  {
    title: "Graphtec Plotter Drivers",
    description: "Get the latest drivers for Graphtec FC series and other Graphtec plotter models. Optimized for XPEL software compatibility.",
    drivers: [
      {
        name: "Graphtec FC Series Driver",
        version: "1.8.2",
        size: "38.7 MB",
        os: "Windows 10/11",
        downloadUrl: "/downloads/plotter-driver-windows.exe",
        releaseDate: "2024-01-10",
        fileType: "exe"
      },
      {
        name: "Graphtec FC Series Driver",
        version: "1.8.2",
        size: "41.3 MB",
        os: "macOS 12+",
        downloadUrl: "/downloads/plotter-driver-macos.dmg",
        releaseDate: "2024-01-10",
        fileType: "dmg"
      }
    ]
  },
  {
    title: "Roland Plotter Drivers",
    description: "Download Roland GX series drivers and other Roland plotter drivers. Tested and certified for XPEL paint protection film cutting.",
    drivers: [
      {
        name: "Roland GX Series Driver",
        version: "3.2.1",
        size: "42.8 MB",
        os: "Windows 10/11",
        downloadUrl: "/downloads/plotter-driver-windows.exe",
        releaseDate: "2024-01-08",
        fileType: "exe"
      },
      {
        name: "Roland GX Series Driver",
        version: "3.2.1",
        size: "48.5 MB",
        os: "macOS 12+",
        downloadUrl: "/downloads/plotter-driver-macos.dmg",
        releaseDate: "2024-01-08",
        fileType: "dmg"
      }
    ]
  }
]; 