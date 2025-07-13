import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown, Loader2, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import codes from "../lib/airport-codes.ts";

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

interface SearchableAirportSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  label: string;
  className?: string;
}

const SearchableAirportSelect = ({ value, onValueChange, placeholder, label, className }: SearchableAirportSelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  // Convert codes to a more manageable format
  const airports = useMemo(() => {
    return codes.map(code => ({
      code: code.code,
      name: code.name,
      city: code.city,
      country: code.country
    }));
  }, []);

  // Filter airports based on search query
  const filteredAirports = useMemo(() => {
    if (!searchQuery) return airports.slice(0, 100); // Show first 100 when no search
    
    const query = searchQuery.toLowerCase().trim();
    const filtered = airports
      .filter(airport => 
        airport.name.toLowerCase().includes(query) ||
        airport.city.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query) ||
        airport.code.toLowerCase().includes(query)
      )
      .slice(0, 50); // Limit results for performance
    
    // Debug: Log search results
    if (searchQuery && filtered.length > 0) {
      console.log(`Search for "${searchQuery}" found ${filtered.length} results:`, filtered.slice(0, 3));
    }
    
    return filtered;
  }, [airports, searchQuery]);

  // Simulate loading when opening
  useEffect(() => {
    if (open) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);



  const selectedAirport = airports.find(airport => airport.code === value);

  const handleSelect = (airportCode: string) => {
    onValueChange(airportCode);
    // Force close the popover
    setOpen(false);
    // Also try to blur any focused element
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className={`space-y-2 ${className || ''}`}>
      <Label className="text-sm font-semibold text-gray-700">{label}</Label>
      <Popover open={open} onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setSearchQuery("");
        }
      }}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 text-gray-900 hover:bg-white/70"
          >
            {selectedAirport ? (
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Plane className="h-4 w-4 shrink-0" />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium truncate text-sm">{selectedAirport.name}</span>
                  <span className="text-xs text-gray-500 truncate">
                    {selectedAirport.code} • {selectedAirport.city}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[calc(100vw-2rem)] sm:w-[350px] p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput 
              placeholder="Search by airport name, city, or country..." 
              value={searchQuery}
              onValueChange={setSearchQuery}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && filteredAirports.length > 0) {
                  handleSelect(filteredAirports[0].code);
                }
              }}
            />
            <CommandList className="max-h-[300px] overflow-y-auto">
              {isLoading ? (
                <div className="flex items-center justify-center py-6">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Loading airports...</span>
                </div>
              ) : (
                <>
                  {/* <CommandEmpty>No airport found.</CommandEmpty> */}
                  <CommandGroup>
                    {filteredAirports.map((airport) => (
                      <div
                        key={airport.code}
                        onClick={() => handleSelect(airport.code)}
                        className="flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === airport.code ? "opacity-100" : "opacity-0"
                          )}
                        />
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-medium truncate text-sm">{airport.name}</span>
                            <span className="text-xs text-muted-foreground shrink-0">({airport.code})</span>
                          </div>
                          <span className="text-xs text-muted-foreground truncate">
                            {airport.city}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchableAirportSelect; 