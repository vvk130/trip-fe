import StationPaginatedDto from "./StationPaginatedDto";

type StationDetailDto = StationPaginatedDto & {
  address: string | null;
  NumJourneysStarting: number;
  NumJourneysEnding: number;
  AvgDistanceJourneysStarting: number;
  AvgDurationJourneysStarting: number;
};

export default StationDetailDto;