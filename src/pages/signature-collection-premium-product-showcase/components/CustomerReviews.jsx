import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'All Reviews', count: totalReviews },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const displayedReviews = showAllReviews ? reviews : reviews?.slice(0, 6);

  const renderStars = (rating) => {
    return [...Array(5)]?.map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-secondary fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <div className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {renderStars(Math.floor(averageRating))}
            </div>
            <span className="text-2xl font-semibold text-foreground">{averageRating}</span>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Rating Breakdown */}
        {/* <div className="bg-card rounded-organic p-6 mb-8 max-w-2xl mx-auto">
          <div className="space-y-3">
            {[5, 4, 3, 2, 1]?.map((rating) => {
              const count = rating === 5 ? 156 : rating === 4 ? 89 : rating === 3 ? 23 : rating === 2 ? 8 : 4;
              const percentage = (count / totalReviews) * 100;
              
              return (
                <div key={rating} className="flex items-center space-x-3">
                  <span className="text-sm text-foreground w-8">{rating}</span>
                  <Icon name="Star" size={14} className="text-secondary" />
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12">{count}</span>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          {/* Filter Options */}
          <div className="flex flex-wrap gap-2">
            {filterOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setSelectedFilter(option?.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedFilter === option?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {option?.label} ({option?.count})
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="bg-card border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {displayedReviews?.map((review, index) => (
            <div key={index} className="bg-card rounded-organic p-6 space-y-4">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review?.avatar}
                      alt={review?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{review?.name}</h4>
                    <p className="text-sm text-muted-foreground">{review?.hairType}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    {renderStars(review?.rating)}
                  </div>
                  <p className="text-sm text-muted-foreground">{review?.date}</p>
                </div>
              </div>

              {/* Review Content */}
              <div className="space-y-3">
                <h5 className="font-medium text-foreground">{review?.title}</h5>
                <p className="text-muted-foreground leading-relaxed">{review?.content}</p>
              </div>

              {/* Review Images */}
              {review?.images && review?.images?.length > 0 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {review?.images?.map((image, imgIndex) => (
                    <div key={imgIndex} className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Review image ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center space-x-4">
                  {review?.verified && (
                    <div className="flex items-center space-x-1 text-success">
                      <Icon name="CheckCircle" size={14} />
                      <span className="text-sm">Verified Purchase</span>
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">
                    Used for {review?.usageDuration}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <Icon name="ThumbsUp" size={14} />
                    <span className="text-sm">{review?.helpful}</span>
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <Icon name="Flag" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        {!showAllReviews && reviews?.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAllReviews(true)}
              iconName="ChevronDown"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Show All {totalReviews} Reviews
            </Button>
          </div>
        )}

        {/* Write Review CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-organic p-8 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Share Your Experience
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Help other customers discover their perfect hair care routine by sharing your transformation story with our community.
          </p>
          {/* <Button
            variant="default"
            iconName="Edit"
            iconPosition="left"
            className="bg-golden-gradient hover:opacity-90"
          >
            Write a Review
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;