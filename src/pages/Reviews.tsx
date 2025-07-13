import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  ThumbsUp, 
  MessageCircle, 
  User, 
  Calendar, 
  Filter,
  Send,
  Quote,
  Award,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  verified: boolean;
  tripType: string;
  destination: string;
  avatar: string;
}

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: "",
    content: "",
    tripType: "",
    destination: ""
  });

  const reviews: Review[] = [
    {
      id: "1",
      author: "Sarah Johnson",
      rating: 5,
      title: "Excellent service and great prices!",
              content: "I booked a last-minute flight to Paris and Brand Name Travel found me an amazing deal. The booking process was smooth, and customer service was incredibly helpful when I had questions about my itinerary. Highly recommend!",
      date: "2024-12-15",
      helpful: 24,
      verified: true,
      tripType: "Leisure",
      destination: "Paris, France",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "2",
      author: "Michael Chen",
      rating: 4,
      title: "Good experience overall",
      content: "The website is easy to use and I found competitive prices. The only minor issue was a slight delay in receiving my confirmation email, but everything else was perfect. Will definitely use again.",
      date: "2024-12-10",
      helpful: 18,
      verified: true,
      tripType: "Business",
      destination: "Tokyo, Japan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "3",
      author: "Emily Rodriguez",
      rating: 5,
      title: "Amazing customer support!",
              content: "When my flight was cancelled due to weather, Brand Name Travel's customer service team went above and beyond to help me find an alternative. They were patient, professional, and found me a better flight option. Outstanding service!",
      date: "2024-12-08",
      helpful: 31,
      verified: true,
      tripType: "Leisure",
      destination: "Barcelona, Spain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "4",
      author: "David Thompson",
      rating: 3,
      title: "Decent but could be better",
      content: "The booking process was straightforward, but the mobile app could use some improvements. Prices were competitive, but I've seen better deals elsewhere. Overall, it's okay but not exceptional.",
      date: "2024-12-05",
      helpful: 12,
      verified: true,
      tripType: "Business",
      destination: "London, UK",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "5",
      author: "Lisa Wang",
      rating: 5,
      title: "Best flight booking experience ever!",
              content: "I've used many travel sites, but Brand Name Travel is by far the best. The search filters are intuitive, prices are unbeatable, and the booking confirmation came instantly. Plus, their travel insurance options are comprehensive and affordable.",
      date: "2024-12-03",
      helpful: 28,
      verified: true,
      tripType: "Leisure",
      destination: "Sydney, Australia",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "6",
      author: "Robert Kim",
      rating: 4,
      title: "Reliable and trustworthy",
              content: "Booked multiple flights through Brand Name Travel and never had any issues. The website is reliable, prices are fair, and customer service is responsive. Would definitely recommend to friends and family.",
      date: "2024-11-30",
      helpful: 15,
      verified: true,
      tripType: "Business",
      destination: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedRating === "all") return true;
    return review.rating === parseInt(selectedRating);
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "rating":
        return b.rating - a.rating;
      case "helpful":
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to your backend
    alert("Thank you for your review! It will be published after moderation.");
    setShowReviewForm(false);
    setNewReview({
      rating: 5,
      title: "",
      content: "",
      tripType: "",
      destination: ""
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews & Ratings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their travel experiences with Brand Name Travel. 
            Real reviews from real travelers.
          </p>
        </div>

        {/* Overall Rating Summary */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <p className="text-gray-600">Based on {totalReviews} reviews</p>
                <Badge className="mt-2 bg-green-500">Verified Reviews</Badge>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Rating Distribution</h3>
                <div className="space-y-2">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center gap-2">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm">{rating}</span>
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={() => setShowReviewForm(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Write a Review
          </Button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <Card className="mb-8 border-blue-200">
            <CardHeader>
              <CardTitle>Write Your Review</CardTitle>
              <CardDescription>
                Share your travel experience with Brand Name Travel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
                    <Select value={newReview.tripType} onValueChange={(value) => setNewReview({...newReview, tripType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Leisure">Leisure</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Family">Family</SelectItem>
                        <SelectItem value="Honeymoon">Honeymoon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <Input
                      placeholder="Where did you travel?"
                      value={newReview.destination}
                      onChange={(e) => setNewReview({...newReview, destination: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review Title</label>
                  <Input
                    placeholder="Brief summary of your experience"
                    value={newReview.title}
                    onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review Content</label>
                  <Textarea
                    placeholder="Share your detailed experience..."
                    rows={4}
                    value={newReview.content}
                    onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                    required
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Review
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {sortedReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{review.author}</h3>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Traveler
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">{review.tripType}</span>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">{review.destination}</span>
                    </div>
                    
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-gray-700 mb-3 leading-relaxed">{review.content}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span>{new Date(review.date).toLocaleDateString()}</span>
                        <button className="flex items-center gap-1 hover:text-blue-600">
                          <ThumbsUp className="w-4 h-4" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "Brand Name Travel made booking my dream vacation so easy. The prices were unbeatable and the customer service was exceptional."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(5)}
                  </div>
                  <span className="text-sm text-gray-600">- Jennifer M.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <Award className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "I've used many travel sites, but Brand Name Travel consistently offers the best deals and most reliable service."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(5)}
                  </div>
                  <span className="text-sm text-gray-600">- Robert K.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <Heart className="w-8 h-8 text-purple-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">
                  "The travel insurance options and 24/7 support give me peace of mind when traveling. Highly recommended!"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(5)}
                  </div>
                  <span className="text-sm text-gray-600">- Maria S.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Great Travel?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of satisfied customers who trust Brand Name Travel for their travel needs.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Booking Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews; 